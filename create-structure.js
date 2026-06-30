const fs = require('fs');
const path = require('path');

// Project structure definition
const structure = {
  'mirror': {
    '.gitignore': '',
    'README.md': '',
    'docker-compose.yml': '# local dev: postgres, redis, kafka, all services',
    '.gitlab-ci.yml': '# parent pipeline, includes per-service rules',
    
    'docs': {
      'hld': {
        'system_architecture.md': '',
        'api_pathways.md': '',
        'user_flow.md': '',
        'state_diagram.md': '',
        'hld_event_flow.md': ''
      },
      'api-contracts': {
        '.gitkeep': ''
      },
      'adr': {
        '.gitkeep': ''
      }
    },
    
    'infra': {
      'terraform': {
        'modules': {
          'ec2-k3s-node': {
            '.gitkeep': ''
          },
          's3': {
            '.gitkeep': ''
          },
          'ecr': {
            '.gitkeep': ''
          },
          'vpc': {
            '.gitkeep': ''
          }
        },
        'envs': {
          'dev': {
            '.gitkeep': ''
          },
          'staging': {
            '.gitkeep': ''
          }
        }
      },
      'k8s': {
        'base': {
          '.gitkeep': ''
        },
        'services': {
          'auth-svc': {
            '.gitkeep': ''
          },
          'conversation-svc': {
            '.gitkeep': ''
          },
          'embedding-svc': {
            '.gitkeep': ''
          },
          'knowledge-base-svc': {
            '.gitkeep': ''
          },
          'quiz-gen-svc': {
            '.gitkeep': ''
          },
          'quiz-engine-svc': {
            '.gitkeep': ''
          },
          'realtime-svc': {
            '.gitkeep': ''
          },
          'notification-svc': {
            '.gitkeep': ''
          },
          'llm-svc': {
            '.gitkeep': ''
          },
          'gateway': {
            '.gitkeep': ''
          }
        }
      },
      'helm': {
        '.gitkeep': ''
      },
      'vault': {
        'policies': {
          '.gitkeep': ''
        }
      }
    },
    
    'shared-ci': {
      'node.gitlab-ci.yml': '',
      'python.gitlab-ci.yml': '',
      'go.gitlab-ci.yml': ''
    },
    
    'services': {
      'gateway': {
        'Dockerfile': '',
        'nginx.conf': '',
        '.gitlab-ci.yml': ''
      },
      'auth-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'package.json': '',
        'src': {
          '.gitkeep': ''
        },
        'test': {
          '.gitkeep': ''
        },
        'migrations': {
          '.gitkeep': ''
        }
      },
      'conversation-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'requirements.txt': '',
        'app': {
          '.gitkeep': ''
        },
        'tests': {
          '.gitkeep': ''
        }
      },
      'embedding-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'requirements.txt': '',
        'app': {
          '.gitkeep': ''
        },
        'tests': {
          '.gitkeep': ''
        }
      },
      'knowledge-base-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'requirements.txt': '',
        'app': {
          '.gitkeep': ''
        },
        'migrations': {
          '.gitkeep': ''
        },
        'tests': {
          '.gitkeep': ''
        }
      },
      'quiz-gen-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'requirements.txt': '',
        'app': {
          '.gitkeep': ''
        },
        'tests': {
          '.gitkeep': ''
        }
      },
      'quiz-engine-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'go.mod': '',
        'cmd': {
          '.gitkeep': ''
        },
        'internal': {
          '.gitkeep': ''
        },
        'tests': {
          '.gitkeep': ''
        }
      },
      'realtime-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'package.json': '',
        'src': {
          '.gitkeep': ''
        },
        'test': {
          '.gitkeep': ''
        }
      },
      'notification-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'package.json': '',
        'src': {
          '.gitkeep': ''
        },
        'test': {
          '.gitkeep': ''
        }
      },
      'llm-svc': {
        'Dockerfile': '',
        '.gitlab-ci.yml': '',
        'requirements.txt': '',
        'app': {
          '.gitkeep': ''
        },
        'tests': {
          '.gitkeep': ''
        }
      }
    }
  }
};

/**
 * Recursively creates directory structure from object definition
 * @param {Object} structure - The structure object
 * @param {string} basePath - The base path to create structure in
 */
function createStructure(structure, basePath = '.') {
  Object.keys(structure).forEach(key => {
    const currentPath = path.join(basePath, key);
    const value = structure[key];

    if (typeof value === 'object' && value !== null) {
      // It's a directory
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath, { recursive: true });
        console.log(`✅ Created directory: ${currentPath}`);
      }
      // Recursively create subdirectories and files
      createStructure(value, currentPath);
    } else {
      // It's a file
      const dirPath = path.dirname(currentPath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      if (!fs.existsSync(currentPath)) {
        fs.writeFileSync(currentPath, value || '');
        console.log(`📄 Created file: ${currentPath}`);
      }
    }
  });
}

// Main execution
console.log('🚀 Starting project structure creation...\n');

try {
  createStructure(structure);
  console.log('\n✨ Project structure created successfully!');
  console.log('\n📁 Structure created in: ./mirror/');
  console.log('\nNext steps:');
  console.log('  1. cd mirror');
  console.log('  2. Review the created structure');
  console.log('  3. Start implementing services');
} catch (error) {
  console.error('❌ Error creating structure:', error.message);
  process.exit(1);
}
