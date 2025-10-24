# Como conectar o lidar da sick ao robô pionner?

Para isso conecte a alimentação do sensor e cabo de dados.
No computador do robô de permissão de acesso para a porta serial com seguinte comando
```bash
chmod a+rw /dev/ttyS1
```
Agora precisamos inicializar o nó que lê os dados do sensor na porta serial, para isso utilize o seguinte comando:
```bash
rosrun sicktoolbox_wrapper sicklms _port:=/dev/ttyS1
```