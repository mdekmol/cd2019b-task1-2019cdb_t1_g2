var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'Collaborative Product Design Internship Group 2 \n 協同產品設計實習第二組 \n Github \n Blog \n Reveal \n \n \n \n \n Leader \n Assignments \n \n \n 40623249 李秉樺 \n V-rep模擬 \n \n \n \n \n \n \n \n Member \n Assignments \n \n \n 40623202 吳姍蓉 \n 管理倉儲、網站、BLOG \n \n \n 40623209 李芳瑜 \n 管理倉儲、網站、BLOG \n \n \n 40623214 吳家文 \n V-rep模擬 \n \n \n 40623215 吳柏毅 \n Onshape \n \n \n 40623220 蔡崇廷 \n V-rep模擬 \n \n \n 40623236 黃子峰 \n V-rep模擬 \n \n \n 40623247 廖峻祥 \n 管理倉儲、網站、BLOG \n \n \n 40623250 湯峻傑 \n Onshape \n \n \n 40623251 鄧靖宣 \n V-rep模擬 \n \n \n 40423217 阮奕誠 \n 管理倉儲、網站、BLOG \n \n \n \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Directory Structure', 'text': '第二位想要編輯這裡 \n \n CMSimfly 的動態系統採用 Python3 + Flask 建構, 並且利用 Beatifulsoup 解讀位於 contig 目錄中的 content.htm 超文件檔案. \n content.htm 檔案可以透過動態系統中的 generate_pages 功能, 將超文件轉為位於 content 目錄中的個別頁面檔案. \n 動態系統與靜態系統則共用 downloads, images, static 等目錄, 其中 downloads 目錄存放在動態系統上傳的文件檔, 而 images 目錄則存放動態系統所上傳的影像檔案, 包括 jpg, png 與 gif 等格式圖檔. \n static 目錄則存放在動態與靜態系統所需要的 Javascript 或 Brython 程式檔. \n 還有這裡 \n 首先修改這裡 \n', 'tags': '', 'url': 'Directory Structure.html'}, {'title': 'Course', 'text': '', 'tags': '', 'url': 'Course.html'}, {'title': 'week1', 'text': '學習如何一次上傳多個圖檔, 並且學會如何引用, 並且設定圖片大小. \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '網路與電腦程式只 是工具,  任何人希望與遠端的系統或成員溝通, 可以使用網路. \n 任何人想要利用電腦的能力解決問題, 就必須學會編寫電腦程式, 與電腦溝通. \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '根據\xa0 https://2019wcm.blogspot.com/2019/03/ungit .html \xa0的設定, 完成  ungit  配置. \n ssh 連結  github  倉儲. \n', 'tags': '', 'url': 'week3.html'}, {'title': 'Week4', 'text': '根據 \xa0 https://2019wcm.blogspot.com/search/label/ungit \xa0完成ungit的配置 \n Youtube 連結： \xa0 https://www.youtube.com/watch?v=lB-spECfhr8 \xa0 \n 01： \n \n clone 位址：https://github.com/ mdecourse /cmstest.git \n (cmd視窗執行)Y:/cd project/cd  cmstest /python  wsgi .py 進入將  cmstest  clone 的檔案位址 \n https://localhost：9443 進入測試網站 \n 進行改版( save → generate_page ) \n \n \n Q：同步推送的位址會在哪裡？ \xa0 \xa0 \xa0 近端ungit更新後可以就近端圖像檢視其版本序列所在分支，若權限有取得可行遠端推送，所推送對應的倉儲為 mdecourse。 \n Q：怎麼曉得更新的位址在哪？ \xa0 \xa0 \xa0 由當初 git clone 的倉儲即是。 \n \n 02：\xa0.config (由 SciTE 開啟後內容) \n [user] name = scrum-3 \xa0 \xa0\xa0 →予以使用者判讀，未有系統功能 email =  scrum3@mde.tw \xa0 \xa0\xa0 →予以系統行身分確認，使用者須改為自己對應此系統的  gmail [http] proxy =  http://140.130.17.42:3128 \xa0 \xa0\xa0 →為指定連線 proxy，使用者若未在執行裝置上指定(該) proxy，系統會自行抓取該裝置之連線位址 \n 03： \n \n \xa0(cmd視窗執行)Y:/cd project/cd  cmstest / kungit \n \xa0Google chrome 彈出視窗出現 error 訊息： fatal: unable to access \'https://github.com/mdecourse/cmstest/\': Received HTTP code 403 from proxy after CONNECT \n \n \n 進入Google chrome  ungit  彈出視窗，Erroe 警告內文仍可檢視先前版本編輯，發現先前版本新增者為 Scrum，並且編輯紀錄為 5 days ago(且為上週課堂操作示範改版內容)。 \n Q：言下之意我判斷之前在此所更新的該  cmstest  和示範教材為同一個版本序列，遂若我端逕自更新成立會覆蓋教材，且連同 https://github.com/mdecourse/cmstest.git 位址也將被覆蓋？ \n \n \n \n →為"沒有執行權限"該狀況因為  cmstest  是由  mdeocurse  進行 clone，所對應的倉儲並未擁有編輯權限，遂在過去的編輯仍可以在"近端"  ungit  進行檢視，但無法推送至遠端  github \n \n 詳見：\xa0\xa0 https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g2/wiki \xa0 \n 04： \n 根據\xa0 https://www.youtube.com/watch?v=t4PslV5Abjs\xa0 \xa0 說明如何利用 ssh 與 private key 對 Github 倉儲提交推送，直接執行 git push指令行推送，不需要重複身分驗證。 \n 原先建立的  Y :  \\ 目錄下並沒有 PortableGit 資料夾，遂無法建立對應路徑。於是逕自下載 PortableGit-2.21.0 版本，並設定 path 路徑。 PortableGit-2.21.0下載連結： \xa0 https://git-scm.com/download/win \xa0 \n \n set path9=%Disk%:\\PortableGit;%Disk%:\\PortableGit\\bin; \n 在 path 後加上 %path% \n \n \n   國立虎尾科技大學 機械設計工程系 40423217 利用 ssh 與 private key 對 Github 倉儲提交推送 V3畫質提升 \n', 'tags': '', 'url': 'Week4.html'}, {'title': 'Week5', 'text': 'Onshape_Football_Table \xa0模型檔連結 \n Football Table Onshape module Youtube \n Onshape_Football_Table_module_01 \n Onshape_Football_Table_module_02 \n Onshape_Football_Table_module_03 \n Onshape_Football_Table_module_04 \n V-rep BubbleRob Tutorial. \n BubbleRob_Tutorial： www.coppeliarobotics.com/helpFiles/en/bubbleRobTutorial.htm \xa0 \n V-rep_bubblerob_tutorial_02 \n V-rep_bubblerob_tutorial_03 \n V-rep_bubblerob_tutorial_04 \n 最末三段作業出現問題。BubbleRob 無法利用感測器的回傳直做運動條件改變 \n 40423217_V-rep_BubbleRob_Tutorial_V3 \n 出問題段落位置，問題解決中 \n \n git  http \xa0與 ssh \n 利用 ssh 對 git 改版, 必須使用\xa0 home/.ssh/config 設定, 才能透過 proxy 伺服器進行連線, 由於在 IPv6 環境下, 必須要透過 proxy 才能對 Git 連線, 因此若無 config, 無法對遠端改版 \n ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H 140.130.17.53:3128 %h %p\n\nHost github.com\nUser git\nPort 22\nHostname github.com\n\nIdentityFile "y:\\home\\.ssh\\id_rsa"\n\nTCPKeepAlive yes\nIdentitiesOnly yes\n\nHost ssh.github.com\nUser git\nPort 443\nHostname ssh.github.com\n\nIdentityFile "y:\\home\\.ssh\\id_rsa"\n\nTCPKeepAlive yes\nIdentitiesOnly yes \n', 'tags': '', 'url': 'Week5.html'}, {'title': 'Week6', 'text': 'Ungit 近端版本分支合併，以及小組遠端推送問題。處理過程橫跨 Week6 週末到 Wee7 課程時段。 \n \n 解決推送問題：方案1. \n \n .config 內容 user1 修正為對應小組學號 40423217： \n \n .config 內容所描述的 user1 and user2 是謂為同一使用者可以利用 user1 and user2 兩身分，分別進行不同對應帳號，行同一或不同倉儲進行編輯、推送等動作；也因此可以在 .config 內文追加 user3 user4 等身分，行上述作業模式。 \n \n \n 遂根據上述：20190329推送問題： \n \n 可能為 .config 內文 user1 並未修正為小組對應學號 40423217 ，遂無法執行 ssh 在小組推送時的身分驗證。 \n - ProxyCommand y:/PortableGit/mingw64/bin/connect.exe  - -H 140.130.17.32:3128 -  - for 40423217 - url = git@github.com_40423217:mdekmol/cd2019b-task1-2019cdb_t1_g2.git - Host github.com_40423217 - User git - Port 22 - Hostname github.com -  - IdentityFile "y:\\home\\.ssh\\id_rsa_40423217" -  - TCPKeepAlive yes - IdentitiesOnly yes -  - for user2 - url = git@github.com_user2:user2/user2.com.git - Host github.com_user2 - Port 22 - Hostname github.com -  - IdentityFile "y:\\home\\.ssh\\id_rsa_user2" -  - TCPKeepAlive yes - IdentitiesOnly yes \n \n \n \n 持續嘗試推送，在 ungit 視窗出現錯誤： \n \n \n - connect --- simple relaying command via proxy. - Version 1.105 - usage: Y:\\PortableGit\\mingw64\\bin\\connect.exe [-dnhst45] [-p local-port]  - [-H proxy-server[:port]] [-S [user@]socks-server[:port]]  - [-T proxy-server[:port]] - [-c telnet-proxy-command] - host port - ssh_exchange_identification: Connection closed by remote host - fatal: Could not read from remote repository. \n - Please make sure you have the correct access rights - and the repository exists. \n \n \n \n \n \n \n 針對方案 1 狀況處理： \n \n \n - ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.kmol.info:3128 %h %p(為加上此程式，短暫的不再出現錯誤後可執行檢視，不曉得其功能) - for user1 - url = git@github.com_user1:user1/cmstest.git - Host github.com_user1 - User git - Port 22 - Hostname github.com - IdentityFile "y:\\home.ssh\\id_rsa_user1" - TCPKeepAlive yes - IdentitiesOnly yes - for user2 - url = git@github.com_user2:user2/user2.com.git - Host github.com_user2 - Port 22 - Hostname github.com - IdentityFile "y:\\home.ssh\\id_rsa_user2" - TCPKeepAlive yes - IdentitiesOnly yes \n \n \n \n \n \n \n 在未指定proxy進行推送時出現錯誤，仍可持續進行推送 \n', 'tags': '', 'url': 'Week6.html'}, {'title': 'Week7', 'text': '', 'tags': '', 'url': 'Week7.html'}, {'title': 'Week8', 'text': '', 'tags': '', 'url': 'Week8.html'}, {'title': 'Week9', 'text': '', 'tags': '', 'url': 'Week9.html'}, {'title': 'Onshape', 'text': '', 'tags': '', 'url': 'Onshape.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'Experience', 'text': '', 'tags': '', 'url': 'Experience.html'}, {'title': '40623202', 'text': '\n \n \n Date \n \n Week \n \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623202.html'}, {'title': '40623209', 'text': '\n \n \n Date \n \n Week \n \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623209.html'}, {'title': '40623214', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623214.html'}, {'title': '40623215', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623215.html'}, {'title': '40623220', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n 學習如何製作自己的可攜環境及講解本學習的評分 \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n 練習用V-rep做 BubbleRob \n bubbleRob-1 \n bubbleRob-2 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623220.html'}, {'title': '40623236', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623236.html'}, {'title': '40623247', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n 說明本學期評分標準及上課模式 \n 還有中期vrep模擬題目講解~ \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623247.html'}, {'title': '40623249', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623249.html'}, {'title': '40623250', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n 介紹這學期所加入的新規章，每周要自評成績及互評成績，透過 ungit 的導入, 讓 git 與 github 在圖形化介面與中文提交訊息的交互應用下, 能夠更加提升學習效果. \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n 本周再做分組工作，今天完成手足球繪製，在繪製時參照網站上給的尺寸進行繪製，但我發現在裝配的零件上尺寸是相同的經過上學期使用vrep時知道組合件在做拆解時，再配合的尺寸不能一樣，不然無法拆解所以事先更改尺寸，避免造成問題，但還是得實際放到vrep才知道有每有問題. \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623250.html'}, {'title': '40623251', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623251.html'}, {'title': '40423217', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40423217.html'}, {'title': 'Attend', 'text': 'on time :\xa0● \n late : △ \n Leave:\xa0 ╳ National holiday:★ \n \n \n \n Member \n 02/22 \n 03/01 \n 03/08 \n 03/15 \n 03/22 \n 03/29 \n 04/05 \n 04/12 \n 04/19 \n \n \n 40623202 吳姍蓉 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623209 李芳瑜 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623214 吳家文 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623215 吳柏毅 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623220 蔡崇廷 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623236 黃子峰 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623247 廖峻祥 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623249 李秉樺 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623250 湯峻傑 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40623251 鄧靖宣 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n 40423217 阮奕誠 \n ● \n ● \n ● \n ● \n ● \n ● \n \n ★ \n \n \n \n \n \n \n', 'tags': '', 'url': 'Attend.html'}, {'title': 'Q＆A', 'text': '全部頁面會因無法正確解讀而誤刪 \n 在特定情況下, 系統會誤刪 config/content.htm 檔案, 目前在單頁或全部頁面編輯存檔之前, 或將上一版本的 content.htm 存入 content_back.htm, 若 content.htm 內容被程式誤刪, 可以利用備份檔案複製回原始內容後, 再進行後續處理. \n 頁面標題不支援特殊符號 \n 各頁面標題目前不支援特殊符號, 例如: "/", "?" 等, 若已經發生程式無法解讀頁面的情況, 只能從編輯 config/content.htm 下手, 若系統位於遠端, 則後續必須要再設法提供一個額外的編輯 config/content.htm 檔案的網際連結功能. \n Video 引用不支援內部引用 \n tinymce 中插入 video 的小視窗, 要移除引用的圖像與連結, 因為一般建議不要在內容中存入 .mp4 的影片資料, 而只接受引入影片 URL 連結. \n \n', 'tags': '', 'url': 'Q＆A.html'}]};