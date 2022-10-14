#!/bin/bash
curl -sL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-get install -y nodejs
# sudo apt-get install -y selinux-basics selinux-policy-default auditd
# setsebool -P ssh_keysign 1
# selinux-activate
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -p tcp -m tcp -m state -m comment -s xxx.xxx.xxx.xxx/32 --dport 22 --state NEW -j ACCEPT --comment "Open SSH Port for your xxx.xxx.xxx.xxx/32 IP only "
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

git clone https://github.com/trevor256/trevcom.git
sudo reboot

