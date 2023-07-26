exports = async function(arg){
const AWS_CONFIG = {
    credentials: {
      accessKeyId: `<access-id>`,
      secretAccessKey: `<secret-key>`,
    },
    region: 'ap-south-1',
  }
  return AWS_CONFIG
};