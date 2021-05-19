#! /bin/bash
export LANG='UTC-8'
export LC_ALL='en_US.UTF-8'

if [ 0"$MATRIX_CODE_DIR" = "0" ];then
	export MATRIX_CODE_DIR="$(pwd)"
	export MATRIX_APPLOGS_DIR="$(pwd)"
	export MATRIX_PRIVDATA_DIR="$(pwd)"
    #export FAAS_DIR=$MATRIX_CODE_DIR/app/faas
fi

echo "PROJECT PATH is: "$MATRIX_CODE_DIR
#echo "FAAS PATH is: "$FAAS_DIR


LOG_FILE=$MATRIX_APPLOGS_DIR/log
if [ ! -e $LOG_FILE ];then
    mkdir $LOG_FILE
fi

#export ENVTYPE=`cat "$MATRIX_PRIVDATA_DIR"/env_flag.in`
#echo "condition is: "$ENVTYPE

case $1 in
    install)
        echo "virtual env install python packages"
#        sh $MATRIX_CODE_DIR/bin/install.sh
        # 安装python 2.7 的虚拟环境
        sh $MATRIX_CODE_DIR/bin/install.sh
    ;;
    start)
        echo "run start ... "$MATRIX_PRIVDATA_DIR
        source $MATRIX_PRIVDATA_DIR/venv/bin/activate
        cd $MATRIX_CODE_DIR

         #$MATRIX_PRIVDATA_DIR/venv/bin/uwsgi -d --ini $FAAS_DIR/bin/uwsgi.ini

         # 启动 faas服务
         #uwsgi -d --ini $FAAS_DIR/bin/uwsgi.ini
         #uwsgi -d --ini $MATRIX_CODE_DIR/bin/faas_uwsgi.ini
         #if [ $? = 0 ];then
         # echo "faas server start success"
         #else
         # echo "faas server start failed"
         #fi

         # 启动主程序
#         uwsgi -d --ini $MATRIX_CODE_DIR/bin/uwsgi.ini
         $MATRIX_PRIVDATA_DIR/venv/bin/uwsgi -d --ini $MATRIX_CODE_DIR/bin/uwsgi.ini
        if [ $? = 0 ];then
          echo "app server start success"
        else
          echo "app server start failed"
		fi

        deactivate
        echo "start with nohup"
    ;;
    run)
        echo "run run ... "$MATRIX_PRIVDATA_DIR
        source $MATRIX_PRIVDATA_DIR/venv/bin/activate
        cd $MATRIX_CODE_DIR

        #$MATRIX_PRIVDATA_DIR/venv/bin/uwsgi --ini /bin/uwsgi.ini


        # 本地启动命令
        # 启动 faas服务
        #uwsgi -d --ini $FAAS_DIR/bin/uwsgi.ini
        #uwsgi -d --ini $MATRIX_CODE_DIR/bin/faas_uwsgi.ini
        #$MATRIX_PRIVDATA_DIR/venv/bin/uwsgi -d --ini $MATRIX_CODE_DIR/bin/faas_uwsgi.ini

        #if [ $? = 0 ];then
        #  echo "faas server start success"
        #else
        #  echo "faas server start failed"
        #fi

        # 启动主服务
        # uwsgi --ini $MATRIX_CODE_DIR/bin/uwsgi.ini
        $MATRIX_PRIVDATA_DIR/venv/bin/uwsgi --ini $MATRIX_CODE_DIR/bin/uwsgi.ini
        if [ $? = 0 ];then
          echo "app server start success"
        else
          echo "app server start failed"
		fi

    ;;
    stop)
#        PID_FILE=$LOG_FILE/run.pid
        PID_FILE=$MATRIX_CODE_DIR/bin/uwsgi/uwsgi.pid
        #FAAS_PID_FILE=$FAAS_DIR/bin/uwsgi/uwsgi.pid

        cat $PID_FILE
        #cat $FAAS_PID_FILE

        # 停止主服务
        if [ -e $PID_FILE ];then
            $MATRIX_PRIVDATA_DIR/venv/bin/uwsgi --stop $MATRIX_CODE_DIR/bin/uwsgi/uwsgi.pid
#            uwsgi --stop $MATRIX_CODE_DIR/bin/uwsgi/uwsgi.pid

            if [ $? = 0 ];then
                echo "stop app server success"
            else
                echo "stop app server failed"
            fi

        else
            echo "app server is not started"
        fi

        # 停止 faas 服务
        #if [ -e $FAAS_PID_FILE ];then
        #    $MATRIX_PRIVDATA_DIR/venv/bin/uwsgi --stop  $FAAS_DIR/bin/uwsgi/uwsgi.pid
#            uwsgi --stop $FAAS_DIR/bin/uwsgi/uwsgi.pid

        #    if [ $? = 0 ];then
        #        echo "stop faas server success"
        #    else
        #        echo "stop faas server failed"
        #    fi

        #else
        #    echo "faas server is not started"
        #fi
    ;;
    *)
        echo "Using option{install|start|run|stop}"
    ;;
esac

