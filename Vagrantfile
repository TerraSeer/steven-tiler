# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.provider "virtualbox"
  config.vm.box = "ubuntu/trusty64"

  local_config = Hash.new

  # OS-specific configurationa
  case RUBY_PLATFORM.downcase
  when /mswin|win32|windows/
    # Windows
    local_config[:synced_folder_type] = 'smb'
  when /darwin/
    # OS X
    local_config[:synced_folder_type] = 'nfs'
  when /linux/
    # Linux
  else
    # Unknown
  end
  
  # Run provisioner
  config.vm.provision "shell", path: "provision.sh"

  # Configure hostname
  config.vm.hostname  = "terraseer-windshaft.local"

  # Configure VM with private IP
  config.vm.network "private_network", ip: "192.168.192.168"
end
