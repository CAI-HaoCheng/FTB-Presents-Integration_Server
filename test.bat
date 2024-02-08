chcp 65001
SET Hour=%NowTime:~0,2%
SET Minute=%NowTime:~3,2%
SET Second=%NowTime:~6,2%
SET /A Millisecond=%NowTime:~9,2%*10

echo 時間 %Hour%:%Minute%:%Second%.%Millisecond%


echo %DATE% %TIME%

pause