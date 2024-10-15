import React, { useState } from 'react';
import BookList from './book-list/book-list';
import { Box, Grid2, Pagination, Typography } from '@mui/material';
import './home.css'
import RankingList from './ranking-list/ranking-list';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import BookTable from './book-table/book-table';
import SwipeableBookList from './swipeable-book-list/swipeable-book-list';
import ReviewList from './review-list/review-list';

const books = [
  { id: 1, title: 'Luân Hồi Thương Đế', author: 'Đế Thanh', image: 'https://static.cdnno.com/poster/luan-hoi-thuong-de/300.jpg?1640023379', description: 'Trăm vạn năm trước Võ đạo thế giới phát sinh biến hóa, thiên địa nguyên khí hình thành, Tiên Tà nhị phổ cùng Cửu đại Thiên Kinh buông xuống. Trải qua ... ', genre: 'Huyền Huyễn' },
  { id: 2, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Nhất Trực Trọng Quyền', image: 'https://static.cdnno.com/poster/tot-tot-tot-ta-doat-cong-lao-dung-khong/300.jpg?1716348318', description: 'Trảm yêu trừ ma, liều mạng thủ hộ tông môn, thủ hộ Đại Chu bách tính. Tô Trần không nghĩ tới, chính mình có một ngày sẽ bị cài lên một ... ', genre: 'Huyền Huyễn' },
  { id: 3, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Tiểu Longggg', image: 'https://static.cdnno.com/poster/de-cuong-1/300.jpg?1712148669', genre: 'Huyền Huyễn', description: ' Thế gian có lời đồn rằng mỗi thời đại trước khi hủy diệt đều sẽ sản sinh ra những vị hào kiệt đội trời đạp đất, dùng sức bản thân ... ' },
  { id: 4, title: 'Luân Hồi Thương Đế', author: 'Đế Thanh', image: 'https://static.cdnno.com/poster/luan-hoi-thuong-de/300.jpg?1640023379', description: 'Trăm vạn năm trước Võ đạo thế giới phát sinh biến hóa, thiên địa nguyên khí hình thành, Tiên Tà nhị phổ cùng Cửu đại Thiên Kinh buông xuống. Trải qua ... ', genre: 'Huyền Huyễn' },
  { id: 5, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Nhất Trực Trọng Quyền', image: 'https://static.cdnno.com/poster/tot-tot-tot-ta-doat-cong-lao-dung-khong/300.jpg?1716348318', description: 'Trảm yêu trừ ma, liều mạng thủ hộ tông môn, thủ hộ Đại Chu bách tính. Tô Trần không nghĩ tới, chính mình có một ngày sẽ bị cài lên một ... ', genre: 'Huyền Huyễn' },
  { id: 6, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Tiểu Longggg', image: 'https://static.cdnno.com/poster/de-cuong-1/300.jpg?1712148669', genre: 'Huyền Huyễn', description: ' Thế gian có lời đồn rằng mỗi thời đại trước khi hủy diệt đều sẽ sản sinh ra những vị hào kiệt đội trời đạp đất, dùng sức bản thân ... ' },
  { id: 7, title: 'Đất Trồng Rau Nhà Ta Liên Thông Với Thế Giới Tiểu Nhân Quốc Tiên Hiệp', author: 'Vị Nhiên Độc Tồn', image: 'https://static.cdnno.com/poster/dat-trong-rau-nha-ta-lien-thong-voi-the-gioi-tieu-nhan-quoc-tien-hiep/300.jpg?1725270937', genre: 'Huyền Huyễn', descrition: ' 【Tiểu Nhân Quốc】++ (Vô Địch Lưu]+ 【 Não Động】+ Về nhà trồng trọt, ta phát hiện vườn rau nhà mình lại liên thông với một thế giới tiên hiệp nho nhỏ. Một ... ' },
  { id: 8, title: 'Nhất Kiếm Bá Thiên Poster', author: 'Vĩnh Dạ Tinh Hà', image: 'https://static.cdnno.com/poster/nhat-kiem-ba-thien/300.jpg?1724402661', description: ' Nghe đồn, thế gian có một cảnh, có thể truy tìm nhân quả, lấy một tia thần lực xóa đi đối phương thời không bên trong hết thảy dấu vết. ... ', genre: 'Huyền Huyễn' },
  // Thêm các sách khác
];

const rankingData1 = [
  { id: 1, title: 'Luân Hồi Thương Đế', author: 'Đế Thanh', image: 'https://static.cdnno.com/poster/luan-hoi-thuong-de/300.jpg?1640023379', description: 'Trăm vạn năm trước Võ đạo thế giới phát sinh biến hóa, thiên địa nguyên khí hình thành, Tiên Tà nhị phổ cùng Cửu đại Thiên Kinh buông xuống. Trải qua ... ', genre: 'Huyền Huyễn', currentView: 149, view: 139, lastestChapter: 'Chương 365', time: '2 giờ trước' },
  { id: 2, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Nhất Trực Trọng Quyền', image: 'https://static.cdnno.com/poster/tot-tot-tot-ta-doat-cong-lao-dung-khong/300.jpg?1716348318', description: 'Trảm yêu trừ ma, liều mạng thủ hộ tông môn, thủ hộ Đại Chu bách tính. Tô Trần không nghĩ tới, chính mình có một ngày sẽ bị cài lên một ... ', genre: 'Huyền Huyễn', view: 144, lastestChapter: 'Chương 95', time: '2 giờ trước' },
  { id: 3, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Tiểu Longggg', image: 'https://static.cdnno.com/poster/de-cuong-1/300.jpg?1712148669', genre: 'Huyền Huyễn', description: ' Thế gian có lời đồn rằng mỗi thời đại trước khi hủy diệt đều sẽ sản sinh ra những vị hào kiệt đội trời đạp đất, dùng sức bản thân ... ', view: 122, lastestChapter: 'Chương 35', time: '2 giờ trước' },
  { id: 4, title: 'Luân Hồi Thương Đế', author: 'Đế Thanh', image: 'https://static.cdnno.com/poster/luan-hoi-thuong-de/300.jpg?1640023379', description: 'Trăm vạn năm trước Võ đạo thế giới phát sinh biến hóa, thiên địa nguyên khí hình thành, Tiên Tà nhị phổ cùng Cửu đại Thiên Kinh buông xuống. Trải qua ... ', genre: 'Huyền Huyễn', view: 121, lastestChapter: 'Chương 36', time: '2 giờ trước' },
  { id: 5, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Nhất Trực Trọng Quyền', image: 'https://static.cdnno.com/poster/tot-tot-tot-ta-doat-cong-lao-dung-khong/300.jpg?1716348318', description: 'Trảm yêu trừ ma, liều mạng thủ hộ tông môn, thủ hộ Đại Chu bách tính. Tô Trần không nghĩ tới, chính mình có một ngày sẽ bị cài lên một ... ', genre: 'Huyền Huyễn', view: 120, lastestChapter: 'Chương 65', time: '2 giờ trước' },
  { id: 6, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Tiểu Longggg', image: 'https://static.cdnno.com/poster/de-cuong-1/300.jpg?1712148669', genre: 'Huyền Huyễn', description: ' Thế gian có lời đồn rằng mỗi thời đại trước khi hủy diệt đều sẽ sản sinh ra những vị hào kiệt đội trời đạp đất, dùng sức bản thân ... ', view: 111, lastestChapter: 'Chương 5', time: '2 giờ trước' },
  { id: 7, title: 'Đất Trồng Rau Nhà Ta Liên Thông Với Thế Giới Tiểu Nhân Quốc Tiên Hiệp', author: 'Vị Nhiên Độc Tồn', image: 'https://static.cdnno.com/poster/dat-trong-rau-nha-ta-lien-thong-voi-the-gioi-tieu-nhan-quoc-tien-hiep/300.jpg?1725270937', genre: 'Huyền Huyễn', descrition: ' 【Tiểu Nhân Quốc】++ (Vô Địch Lưu]+ 【 Não Động】+ Về nhà trồng trọt, ta phát hiện vườn rau nhà mình lại liên thông với một thế giới tiên hiệp nho nhỏ. Một ... ', view: 100, lastestChapter: 'Chương 3', time: '2 giờ trước' },
  { id: 8, title: 'Nhất Kiếm Bá Thiên Poster', author: 'Vĩnh Dạ Tinh Hà', image: 'https://static.cdnno.com/poster/nhat-kiem-ba-thien/300.jpg?1724402661', description: ' Nghe đồn, thế gian có một cảnh, có thể truy tìm nhân quả, lấy một tia thần lực xóa đi đối phương thời không bên trong hết thảy dấu vết. ... ', genre: 'Huyền Huyễn', view: 97, lastestChapter: 'Chương 652', time: '2 giờ trước' },
  { id: 9, title: 'Đất Trồng Rau Nhà Ta Liên Thông Với Thế Giới Tiểu Nhân Quốc Tiên Hiệp', author: 'Vị Nhiên Độc Tồn', image: 'https://static.cdnno.com/poster/dat-trong-rau-nha-ta-lien-thong-voi-the-gioi-tieu-nhan-quoc-tien-hiep/300.jpg?1725270937', genre: 'Huyền Huyễn', descrition: ' 【Tiểu Nhân Quốc】++ (Vô Địch Lưu]+ 【 Não Động】+ Về nhà trồng trọt, ta phát hiện vườn rau nhà mình lại liên thông với một thế giới tiên hiệp nho nhỏ. Một ... ', view: 55, lastestChapter: 'Chương 331', time: '2 giờ trước' },
  { id: 10, title: 'Nhất Kiếm Bá Thiên Poster', author: 'Vĩnh Dạ Tinh Hà', image: 'https://static.cdnno.com/poster/nhat-kiem-ba-thien/300.jpg?1724402661', description: ' Nghe đồn, thế gian có một cảnh, có thể truy tìm nhân quả, lấy một tia thần lực xóa đi đối phương thời không bên trong hết thảy dấu vết. ... ', genre: 'Huyền Huyễn', view: 16, lastestChapter: 'Chương 325', time: '2 giờ trước' },
]

const rankingData2 = [
  { id: 1, title: 'Luân Hồi Thương Đế', author: 'Đế Thanh', image: 'https://static.cdnno.com/poster/luan-hoi-thuong-de/300.jpg?1640023379', description: 'Trăm vạn năm trước Võ đạo thế giới phát sinh biến hóa, thiên địa nguyên khí hình thành, Tiên Tà nhị phổ cùng Cửu đại Thiên Kinh buông xuống. Trải qua ... ', genre: 'Huyền Huyễn', currentView: 149 },
  { id: 2, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Nhất Trực Trọng Quyền', image: 'https://static.cdnno.com/poster/tot-tot-tot-ta-doat-cong-lao-dung-khong/300.jpg?1716348318', description: 'Trảm yêu trừ ma, liều mạng thủ hộ tông môn, thủ hộ Đại Chu bách tính. Tô Trần không nghĩ tới, chính mình có một ngày sẽ bị cài lên một ... ', genre: 'Huyền Huyễn', view: 123 },
  { id: 3, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Tiểu Longggg', image: 'https://static.cdnno.com/poster/de-cuong-1/300.jpg?1712148669', genre: 'Huyền Huyễn', description: ' Thế gian có lời đồn rằng mỗi thời đại trước khi hủy diệt đều sẽ sản sinh ra những vị hào kiệt đội trời đạp đất, dùng sức bản thân ... ', view: 112 },
  { id: 4, title: 'Luân Hồi Thương Đế', author: 'Đế Thanh', image: 'https://static.cdnno.com/poster/luan-hoi-thuong-de/300.jpg?1640023379', description: 'Trăm vạn năm trước Võ đạo thế giới phát sinh biến hóa, thiên địa nguyên khí hình thành, Tiên Tà nhị phổ cùng Cửu đại Thiên Kinh buông xuống. Trải qua ... ', genre: 'Huyền Huyễn', view: 100 },
  { id: 5, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Nhất Trực Trọng Quyền', image: 'https://static.cdnno.com/poster/tot-tot-tot-ta-doat-cong-lao-dung-khong/300.jpg?1716348318', description: 'Trảm yêu trừ ma, liều mạng thủ hộ tông môn, thủ hộ Đại Chu bách tính. Tô Trần không nghĩ tới, chính mình có một ngày sẽ bị cài lên một ... ', genre: 'Huyền Huyễn', view: 99 },
  { id: 6, title: 'Tốt Tốt Tốt, Ta Đoạt Công Lao Đúng Không?', author: 'Tiểu Longggg', image: 'https://static.cdnno.com/poster/de-cuong-1/300.jpg?1712148669', genre: 'Huyền Huyễn', description: ' Thế gian có lời đồn rằng mỗi thời đại trước khi hủy diệt đều sẽ sản sinh ra những vị hào kiệt đội trời đạp đất, dùng sức bản thân ... ', view: 97 },
  { id: 7, title: 'Đất Trồng Rau Nhà Ta Liên Thông Với Thế Giới Tiểu Nhân Quốc Tiên Hiệp', author: 'Vị Nhiên Độc Tồn', image: 'https://static.cdnno.com/poster/dat-trong-rau-nha-ta-lien-thong-voi-the-gioi-tieu-nhan-quoc-tien-hiep/300.jpg?1725270937', genre: 'Huyền Huyễn', descrition: ' 【Tiểu Nhân Quốc】++ (Vô Địch Lưu]+ 【 Não Động】+ Về nhà trồng trọt, ta phát hiện vườn rau nhà mình lại liên thông với một thế giới tiên hiệp nho nhỏ. Một ... ', view: 88 },
  { id: 8, title: 'Nhất Kiếm Bá Thiên Poster', author: 'Vĩnh Dạ Tinh Hà', image: 'https://static.cdnno.com/poster/nhat-kiem-ba-thien/300.jpg?1724402661', description: ' Nghe đồn, thế gian có một cảnh, có thể truy tìm nhân quả, lấy một tia thần lực xóa đi đối phương thời không bên trong hết thảy dấu vết. ... ', genre: 'Huyền Huyễn', view: 73 },
  { id: 9, title: 'Đất Trồng Rau Nhà Ta Liên Thông Với Thế Giới Tiểu Nhân Quốc Tiên Hiệp', author: 'Vị Nhiên Độc Tồn', image: 'https://static.cdnno.com/poster/dat-trong-rau-nha-ta-lien-thong-voi-the-gioi-tieu-nhan-quoc-tien-hiep/300.jpg?1725270937', genre: 'Huyền Huyễn', descrition: ' 【Tiểu Nhân Quốc】++ (Vô Địch Lưu]+ 【 Não Động】+ Về nhà trồng trọt, ta phát hiện vườn rau nhà mình lại liên thông với một thế giới tiên hiệp nho nhỏ. Một ... ', view: 33 },
  { id: 10, title: 'Nhất Kiếm Bá Thiên Poster', author: 'Vĩnh Dạ Tinh Hà', image: 'https://static.cdnno.com/poster/nhat-kiem-ba-thien/300.jpg?1724402661', description: ' Nghe đồn, thế gian có một cảnh, có thể truy tìm nhân quả, lấy một tia thần lực xóa đi đối phương thời không bên trong hết thảy dấu vết. ... ', genre: 'Huyền Huyễn', view: 13 },
]

const newReview = [
  {
    id: 1, avatar: "https://static.cdnno.com/user/721fbcca2e19be3900209f47e8377a23/200.jpg?1654431885", username: "Yellow Worm", novelTitle: "https://metruyencv.com/truyen/nan-doi-vat-pham-cua-ta-co-the-thang-cap", rating: 5, content: `Sau khi đã đọc đến chương mới nhất, tui tính bình luận 1 chữ "truyện hay" như mọi lần rồi đi, nhưng như vậy thì quá bất công với tác phẩm cũng như CVT đã tìm được 1 bộ truyện đáng để đọc trong thời buổi kén cá chọn canh như hôm nay.
- Đầu tiên nói về dàn nhân vật: Nvc ổn áp, khi cần nhịn thì nhịn, khi cần súc thì chơi tới bến, quyết đoán, có não, không hở 1 tí là hít khí lạnh. Nvp có não, có đất diễn, vì nhưng thằng ngưu và xui chết hết rồi. Có gái nhe ae, 1, đã ...
- Cốt truyện: Kịch tích, hấp dẫn, dồn dập nhưng có khoảng nghỉ, lớp lang rõ ràng, có nhiều triển vọng trong tương lai. Gần 200 nhưng khối lượng thông tin rất nhiều, gần như không có thủy, mà lại rất cuốn không như mấy bộ truyện yy khác. Pk khá ổn, không dài dòng, câu giờ.
- Map: Đầu truyện tưởng như bao mộ mạt thế dị năng khác, nhưng không, vô cùng rộng lớn, khủng *** bố.
- Hệ thống sức mạnh: Gồm tiến hóa giả và siêu cấp tiến hóa giả. Gồm 10 cấp: 1-3 sơ cấp, 4-6 trung cấp, 3-9 cao cấp, 10 đỉnh- bán thần hóa nhân. Ngoài ra khoa học đóng phần quan trong không thể thiếu, trước súng thì chúng sinh bình đẳng, nếu không thì do súng *** chưa đủ mạnh thôi. Ae nghĩ bị 1 cái chiến cơ bay 10 km 1 GIÂY đụng vào thì sẽ như thế nào? Ai giỏi lý tính động năng coi ra bao nhiêu Jun(J).
+ Tiến hóa giả là người thức tỉnh năng lực đặc biệt, cái này k cần nói nhiều.
+ Siêu cấp tiến hóa giả là hình thái cao hơn của Tiến hóa giả chứ không phải là cấp độ. Siêu cấp tiến hóa giả(SCTHG) trong cơ thể quy tắc hoàn chỉnh, còn Tiến hóa giả(THG) thì không. Cùng cấp SCTHG cân 100 thằng THG, mạnh thì cân 1000 thằng, và dĩ nhiên có thể vượt cấp pk tiến hóa giả bình thường, ở đây THG nhiều hơn *** nên ae cũng cần thắc mắc bug sau này như mấy bộ khác. SCTHG gồm Hướng nội(Bảnh mệnh tiến hóa, thúc đẩy năng lực hiện tại đến cấp độ mới, mạnh hoàn, đa năng hơn, toàn diện hơn) và Hướng ngoại(nắm giữ 1 hệ khác), Hiện giờ chỉ thấy Nvc là nhiều hơn 1 hệ thôi, truyện này 1 hệ nó bá vãi chứ k như dăm ba dị năng rách của truyện khác sớ hữu lần mấy chục cái mà yếu sìu đâu.
+ Còn về năng lực Nvc mọi người đọc sẽ rõ, nói chung là ok, chuyên nghiệp rõ ràng chứ k hỗn tạp thập cẩm.
- Làm sao để Tiến hóa giả lên cấp SCTHG? Thời điểm hiện tại có 2 cách, đầu tiên phải tự thức tỉnh thành Tiến hóa giả chứ k dùng dược tề(3 thành tỉ lệ thất bại thôi, giá rẻ dễ hủy sao THG nhiều hé):
+ Cách 1: Bị Thần hóa nhân ý chí gây sát thương mà không chết có khả năng thức tỉnh, nhớ 8 ngàn vạn đứa thì được khoảng 10 đứa sao á(ae bổ sung, sửa chữa).
+ Cách 2:"Diễn khí" và "Tỉnh khí" của Nvc có thể giúp người người khác thành tiến hóa giả và SCTHG. Hiện giờ chỉ dùng 2 lần thôi, do yếu k dám lộ hàng.
*Thế lực trong tuyện
- Đầu tiên nói về bản khu của Nvc - Khu D0319 - Cấp 2(hiện giờ gần như đã bị hủy diệt): Gồm 7 Thị tộc và Hắc Phong thị tộc, Liên minh(Liên minh hoang dân). Ở đây gồm 2 loại người, thi tộc và hoang dân. Thị tộc là tụi nắm quyền, có căn cứ dưới lòng đất của phồn tinh kỷ nguyên trước để lại, hoang dân tụi nghèo, dân hạ đẳng, cùi bắp. Phần này ae đọc về sau sẽ rõ vì sao có sự phân chia này, tui k spoil.
- Bên ngoài Tân Thủ Thôn: Bản khu hiểu đơn giản như một tinh hệ, mỗi tinh hệ có nền văn minh khác nhau, khoa học của đứa nào mạnh, thì cấp bậc văn minh sẽ cao hơn, chia làn: 1-3 Sơ cấp Văn Minh; 4-6 Trung cấp, 7-9 Cao cấp(cái này tui đoán, hiện nay mới lộ cấp 7 thôi, sau nay chắc sẽ có đỉnh cấp, siêu cấp,...)
Hiện tại Nvc chính đã ra Tân Thủ Thôn đến Khu C101- Cấp 4. Ở đây nó bán tinh cầu(có người, sinh vật sống) như bán vườn hóa vậy:)). Hi vọng truyện k drop, tác giả giữ phong độ, hứa hẹn sẽ là 1 tinh phẩm trong tương lai. Cảm ơn CVT đã mang đến 1 bộ truyện hay.`, likeCount: 1, createdTime: 1728981908
  },
  {
    id: 1, avatar: "https://static.cdnno.com/user/721fbcca2e19be3900209f47e8377a23/200.jpg?1654431885", username: "Yellow Worm", novelTitle: "https://metruyencv.com/truyen/nan-doi-vat-pham-cua-ta-co-the-thang-cap", rating: 5, content: `Sau khi đã đọc đến chương mới nhất, tui tính bình luận 1 chữ "truyện hay" như mọi lần rồi đi, nhưng như vậy thì quá bất công với tác phẩm cũng như CVT đã tìm được 1 bộ truyện đáng để đọc trong thời buổi kén cá chọn canh như hôm nay.
- Đầu tiên nói về dàn nhân vật: Nvc ổn áp, khi cần nhịn thì nhịn, khi cần súc thì chơi tới bến, quyết đoán, có não, không hở 1 tí là hít khí lạnh. Nvp có não, có đất diễn, vì nhưng thằng ngưu và xui chết hết rồi. Có gái nhe ae, 1, đã ...
- Cốt truyện: Kịch tích, hấp dẫn, dồn dập nhưng có khoảng nghỉ, lớp lang rõ ràng, có nhiều triển vọng trong tương lai. Gần 200 nhưng khối lượng thông tin rất nhiều, gần như không có thủy, mà lại rất cuốn không như mấy bộ truyện yy khác. Pk khá ổn, không dài dòng, câu giờ.
- Map: Đầu truyện tưởng như bao mộ mạt thế dị năng khác, nhưng không, vô cùng rộng lớn, khủng *** bố.
- Hệ thống sức mạnh: Gồm tiến hóa giả và siêu cấp tiến hóa giả. Gồm 10 cấp: 1-3 sơ cấp, 4-6 trung cấp, 3-9 cao cấp, 10 đỉnh- bán thần hóa nhân. Ngoài ra khoa học đóng phần quan trong không thể thiếu, trước súng thì chúng sinh bình đẳng, nếu không thì do súng *** chưa đủ mạnh thôi. Ae nghĩ bị 1 cái chiến cơ bay 10 km 1 GIÂY đụng vào thì sẽ như thế nào? Ai giỏi lý tính động năng coi ra bao nhiêu Jun(J).
+ Tiến hóa giả là người thức tỉnh năng lực đặc biệt, cái này k cần nói nhiều.
+ Siêu cấp tiến hóa giả là hình thái cao hơn của Tiến hóa giả chứ không phải là cấp độ. Siêu cấp tiến hóa giả(SCTHG) trong cơ thể quy tắc hoàn chỉnh, còn Tiến hóa giả(THG) thì không. Cùng cấp SCTHG cân 100 thằng THG, mạnh thì cân 1000 thằng, và dĩ nhiên có thể vượt cấp pk tiến hóa giả bình thường, ở đây THG nhiều hơn *** nên ae cũng cần thắc mắc bug sau này như mấy bộ khác. SCTHG gồm Hướng nội(Bảnh mệnh tiến hóa, thúc đẩy năng lực hiện tại đến cấp độ mới, mạnh hoàn, đa năng hơn, toàn diện hơn) và Hướng ngoại(nắm giữ 1 hệ khác), Hiện giờ chỉ thấy Nvc là nhiều hơn 1 hệ thôi, truyện này 1 hệ nó bá vãi chứ k như dăm ba dị năng rách của truyện khác sớ hữu lần mấy chục cái mà yếu sìu đâu.
+ Còn về năng lực Nvc mọi người đọc sẽ rõ, nói chung là ok, chuyên nghiệp rõ ràng chứ k hỗn tạp thập cẩm.
- Làm sao để Tiến hóa giả lên cấp SCTHG? Thời điểm hiện tại có 2 cách, đầu tiên phải tự thức tỉnh thành Tiến hóa giả chứ k dùng dược tề(3 thành tỉ lệ thất bại thôi, giá rẻ dễ hủy sao THG nhiều hé):
+ Cách 1: Bị Thần hóa nhân ý chí gây sát thương mà không chết có khả năng thức tỉnh, nhớ 8 ngàn vạn đứa thì được khoảng 10 đứa sao á(ae bổ sung, sửa chữa).
+ Cách 2:"Diễn khí" và "Tỉnh khí" của Nvc có thể giúp người người khác thành tiến hóa giả và SCTHG. Hiện giờ chỉ dùng 2 lần thôi, do yếu k dám lộ hàng.
*Thế lực trong tuyện
- Đầu tiên nói về bản khu của Nvc - Khu D0319 - Cấp 2(hiện giờ gần như đã bị hủy diệt): Gồm 7 Thị tộc và Hắc Phong thị tộc, Liên minh(Liên minh hoang dân). Ở đây gồm 2 loại người, thi tộc và hoang dân. Thị tộc là tụi nắm quyền, có căn cứ dưới lòng đất của phồn tinh kỷ nguyên trước để lại, hoang dân tụi nghèo, dân hạ đẳng, cùi bắp. Phần này ae đọc về sau sẽ rõ vì sao có sự phân chia này, tui k spoil.
- Bên ngoài Tân Thủ Thôn: Bản khu hiểu đơn giản như một tinh hệ, mỗi tinh hệ có nền văn minh khác nhau, khoa học của đứa nào mạnh, thì cấp bậc văn minh sẽ cao hơn, chia làn: 1-3 Sơ cấp Văn Minh; 4-6 Trung cấp, 7-9 Cao cấp(cái này tui đoán, hiện nay mới lộ cấp 7 thôi, sau nay chắc sẽ có đỉnh cấp, siêu cấp,...)
Hiện tại Nvc chính đã ra Tân Thủ Thôn đến Khu C101- Cấp 4. Ở đây nó bán tinh cầu(có người, sinh vật sống) như bán vườn hóa vậy:)). Hi vọng truyện k drop, tác giả giữ phong độ, hứa hẹn sẽ là 1 tinh phẩm trong tương lai. Cảm ơn CVT đã mang đến 1 bộ truyện hay.`, likeCount: 1, createdTime: 1728981908
  },
  {
    id: 1, avatar: "https://static.cdnno.com/user/721fbcca2e19be3900209f47e8377a23/200.jpg?1654431885", username: "Yellow Worm", novelTitle: "https://metruyencv.com/truyen/nan-doi-vat-pham-cua-ta-co-the-thang-cap", rating: 5, content: `Sau khi đã đọc đến chương mới nhất, tui tính bình luận 1 chữ "truyện hay" như mọi lần rồi đi, nhưng như vậy thì quá bất công với tác phẩm cũng như CVT đã tìm được 1 bộ truyện đáng để đọc trong thời buổi kén cá chọn canh như hôm nay.
- Đầu tiên nói về dàn nhân vật: Nvc ổn áp, khi cần nhịn thì nhịn, khi cần súc thì chơi tới bến, quyết đoán, có não, không hở 1 tí là hít khí lạnh. Nvp có não, có đất diễn, vì nhưng thằng ngưu và xui chết hết rồi. Có gái nhe ae, 1, đã ...
- Cốt truyện: Kịch tích, hấp dẫn, dồn dập nhưng có khoảng nghỉ, lớp lang rõ ràng, có nhiều triển vọng trong tương lai. Gần 200 nhưng khối lượng thông tin rất nhiều, gần như không có thủy, mà lại rất cuốn không như mấy bộ truyện yy khác. Pk khá ổn, không dài dòng, câu giờ.
- Map: Đầu truyện tưởng như bao mộ mạt thế dị năng khác, nhưng không, vô cùng rộng lớn, khủng *** bố.
- Hệ thống sức mạnh: Gồm tiến hóa giả và siêu cấp tiến hóa giả. Gồm 10 cấp: 1-3 sơ cấp, 4-6 trung cấp, 3-9 cao cấp, 10 đỉnh- bán thần hóa nhân. Ngoài ra khoa học đóng phần quan trong không thể thiếu, trước súng thì chúng sinh bình đẳng, nếu không thì do súng *** chưa đủ mạnh thôi. Ae nghĩ bị 1 cái chiến cơ bay 10 km 1 GIÂY đụng vào thì sẽ như thế nào? Ai giỏi lý tính động năng coi ra bao nhiêu Jun(J).
+ Tiến hóa giả là người thức tỉnh năng lực đặc biệt, cái này k cần nói nhiều.
+ Siêu cấp tiến hóa giả là hình thái cao hơn của Tiến hóa giả chứ không phải là cấp độ. Siêu cấp tiến hóa giả(SCTHG) trong cơ thể quy tắc hoàn chỉnh, còn Tiến hóa giả(THG) thì không. Cùng cấp SCTHG cân 100 thằng THG, mạnh thì cân 1000 thằng, và dĩ nhiên có thể vượt cấp pk tiến hóa giả bình thường, ở đây THG nhiều hơn *** nên ae cũng cần thắc mắc bug sau này như mấy bộ khác. SCTHG gồm Hướng nội(Bảnh mệnh tiến hóa, thúc đẩy năng lực hiện tại đến cấp độ mới, mạnh hoàn, đa năng hơn, toàn diện hơn) và Hướng ngoại(nắm giữ 1 hệ khác), Hiện giờ chỉ thấy Nvc là nhiều hơn 1 hệ thôi, truyện này 1 hệ nó bá vãi chứ k như dăm ba dị năng rách của truyện khác sớ hữu lần mấy chục cái mà yếu sìu đâu.
+ Còn về năng lực Nvc mọi người đọc sẽ rõ, nói chung là ok, chuyên nghiệp rõ ràng chứ k hỗn tạp thập cẩm.
- Làm sao để Tiến hóa giả lên cấp SCTHG? Thời điểm hiện tại có 2 cách, đầu tiên phải tự thức tỉnh thành Tiến hóa giả chứ k dùng dược tề(3 thành tỉ lệ thất bại thôi, giá rẻ dễ hủy sao THG nhiều hé):
+ Cách 1: Bị Thần hóa nhân ý chí gây sát thương mà không chết có khả năng thức tỉnh, nhớ 8 ngàn vạn đứa thì được khoảng 10 đứa sao á(ae bổ sung, sửa chữa).
+ Cách 2:"Diễn khí" và "Tỉnh khí" của Nvc có thể giúp người người khác thành tiến hóa giả và SCTHG. Hiện giờ chỉ dùng 2 lần thôi, do yếu k dám lộ hàng.
*Thế lực trong tuyện
- Đầu tiên nói về bản khu của Nvc - Khu D0319 - Cấp 2(hiện giờ gần như đã bị hủy diệt): Gồm 7 Thị tộc và Hắc Phong thị tộc, Liên minh(Liên minh hoang dân). Ở đây gồm 2 loại người, thi tộc và hoang dân. Thị tộc là tụi nắm quyền, có căn cứ dưới lòng đất của phồn tinh kỷ nguyên trước để lại, hoang dân tụi nghèo, dân hạ đẳng, cùi bắp. Phần này ae đọc về sau sẽ rõ vì sao có sự phân chia này, tui k spoil.
- Bên ngoài Tân Thủ Thôn: Bản khu hiểu đơn giản như một tinh hệ, mỗi tinh hệ có nền văn minh khác nhau, khoa học của đứa nào mạnh, thì cấp bậc văn minh sẽ cao hơn, chia làn: 1-3 Sơ cấp Văn Minh; 4-6 Trung cấp, 7-9 Cao cấp(cái này tui đoán, hiện nay mới lộ cấp 7 thôi, sau nay chắc sẽ có đỉnh cấp, siêu cấp,...)
Hiện tại Nvc chính đã ra Tân Thủ Thôn đến Khu C101- Cấp 4. Ở đây nó bán tinh cầu(có người, sinh vật sống) như bán vườn hóa vậy:)). Hi vọng truyện k drop, tác giả giữ phong độ, hứa hẹn sẽ là 1 tinh phẩm trong tương lai. Cảm ơn CVT đã mang đến 1 bộ truyện hay.`, likeCount: 1, createdTime: 1728981908
  },
  {
    id: 1, avatar: "https://static.cdnno.com/user/721fbcca2e19be3900209f47e8377a23/200.jpg?1654431885", username: "Yellow Worm", novelTitle: "https://metruyencv.com/truyen/nan-doi-vat-pham-cua-ta-co-the-thang-cap", rating: 5, content: `Sau khi đã đọc đến chương mới nhất, tui tính bình luận 1 chữ "truyện hay" như mọi lần rồi đi, nhưng như vậy thì quá bất công với tác phẩm cũng như CVT đã tìm được 1 bộ truyện đáng để đọc trong thời buổi kén cá chọn canh như hôm nay.
- Đầu tiên nói về dàn nhân vật: Nvc ổn áp, khi cần nhịn thì nhịn, khi cần súc thì chơi tới bến, quyết đoán, có não, không hở 1 tí là hít khí lạnh. Nvp có não, có đất diễn, vì nhưng thằng ngưu và xui chết hết rồi. Có gái nhe ae, 1, đã ...
- Cốt truyện: Kịch tích, hấp dẫn, dồn dập nhưng có khoảng nghỉ, lớp lang rõ ràng, có nhiều triển vọng trong tương lai. Gần 200 nhưng khối lượng thông tin rất nhiều, gần như không có thủy, mà lại rất cuốn không như mấy bộ truyện yy khác. Pk khá ổn, không dài dòng, câu giờ.
- Map: Đầu truyện tưởng như bao mộ mạt thế dị năng khác, nhưng không, vô cùng rộng lớn, khủng *** bố.
- Hệ thống sức mạnh: Gồm tiến hóa giả và siêu cấp tiến hóa giả. Gồm 10 cấp: 1-3 sơ cấp, 4-6 trung cấp, 3-9 cao cấp, 10 đỉnh- bán thần hóa nhân. Ngoài ra khoa học đóng phần quan trong không thể thiếu, trước súng thì chúng sinh bình đẳng, nếu không thì do súng *** chưa đủ mạnh thôi. Ae nghĩ bị 1 cái chiến cơ bay 10 km 1 GIÂY đụng vào thì sẽ như thế nào? Ai giỏi lý tính động năng coi ra bao nhiêu Jun(J).
+ Tiến hóa giả là người thức tỉnh năng lực đặc biệt, cái này k cần nói nhiều.
+ Siêu cấp tiến hóa giả là hình thái cao hơn của Tiến hóa giả chứ không phải là cấp độ. Siêu cấp tiến hóa giả(SCTHG) trong cơ thể quy tắc hoàn chỉnh, còn Tiến hóa giả(THG) thì không. Cùng cấp SCTHG cân 100 thằng THG, mạnh thì cân 1000 thằng, và dĩ nhiên có thể vượt cấp pk tiến hóa giả bình thường, ở đây THG nhiều hơn *** nên ae cũng cần thắc mắc bug sau này như mấy bộ khác. SCTHG gồm Hướng nội(Bảnh mệnh tiến hóa, thúc đẩy năng lực hiện tại đến cấp độ mới, mạnh hoàn, đa năng hơn, toàn diện hơn) và Hướng ngoại(nắm giữ 1 hệ khác), Hiện giờ chỉ thấy Nvc là nhiều hơn 1 hệ thôi, truyện này 1 hệ nó bá vãi chứ k như dăm ba dị năng rách của truyện khác sớ hữu lần mấy chục cái mà yếu sìu đâu.
+ Còn về năng lực Nvc mọi người đọc sẽ rõ, nói chung là ok, chuyên nghiệp rõ ràng chứ k hỗn tạp thập cẩm.
- Làm sao để Tiến hóa giả lên cấp SCTHG? Thời điểm hiện tại có 2 cách, đầu tiên phải tự thức tỉnh thành Tiến hóa giả chứ k dùng dược tề(3 thành tỉ lệ thất bại thôi, giá rẻ dễ hủy sao THG nhiều hé):
+ Cách 1: Bị Thần hóa nhân ý chí gây sát thương mà không chết có khả năng thức tỉnh, nhớ 8 ngàn vạn đứa thì được khoảng 10 đứa sao á(ae bổ sung, sửa chữa).
+ Cách 2:"Diễn khí" và "Tỉnh khí" của Nvc có thể giúp người người khác thành tiến hóa giả và SCTHG. Hiện giờ chỉ dùng 2 lần thôi, do yếu k dám lộ hàng.
*Thế lực trong tuyện
- Đầu tiên nói về bản khu của Nvc - Khu D0319 - Cấp 2(hiện giờ gần như đã bị hủy diệt): Gồm 7 Thị tộc và Hắc Phong thị tộc, Liên minh(Liên minh hoang dân). Ở đây gồm 2 loại người, thi tộc và hoang dân. Thị tộc là tụi nắm quyền, có căn cứ dưới lòng đất của phồn tinh kỷ nguyên trước để lại, hoang dân tụi nghèo, dân hạ đẳng, cùi bắp. Phần này ae đọc về sau sẽ rõ vì sao có sự phân chia này, tui k spoil.
- Bên ngoài Tân Thủ Thôn: Bản khu hiểu đơn giản như một tinh hệ, mỗi tinh hệ có nền văn minh khác nhau, khoa học của đứa nào mạnh, thì cấp bậc văn minh sẽ cao hơn, chia làn: 1-3 Sơ cấp Văn Minh; 4-6 Trung cấp, 7-9 Cao cấp(cái này tui đoán, hiện nay mới lộ cấp 7 thôi, sau nay chắc sẽ có đỉnh cấp, siêu cấp,...)
Hiện tại Nvc chính đã ra Tân Thủ Thôn đến Khu C101- Cấp 4. Ở đây nó bán tinh cầu(có người, sinh vật sống) như bán vườn hóa vậy:)). Hi vọng truyện k drop, tác giả giữ phong độ, hứa hẹn sẽ là 1 tinh phẩm trong tương lai. Cảm ơn CVT đã mang đến 1 bộ truyện hay.`, likeCount: 1, createdTime: 1728981908
  },
]

const HomePage = () => {
  const [bookSlice, setBookSlice] = useState(books.slice(0, 6))

  const handleClick = () => {
    console.log('clicked')
  }

  const handleChangePagination = (event, value) => {
    const idx = (value - 1) * 6
    setBookSlice(books.slice(idx, idx + 6))
  }

  return (
    <div className="home-page">
      <div className='section'>
        <div className='section-header'>
          <Box sx={{ display: 'flex' }} onClick={handleClick}>
            <Typography
              variant="body"
              sx={{
                flexGrow: 1,
                cursor: 'pointer',
                color: '#fcba03',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              BTV ĐỀ CỬ
            </Typography>
            <DoubleArrowIcon fontSize='12' sx={{ color: '#fcba03', cursor: 'pointer', }} />
          </Box>
        </div>
        <div className='section-content'>
          <BookList books={bookSlice} />
          <Pagination onChange={handleChangePagination} sx={{ marginTop: 3 }} count={Math.ceil(books.length / 6)} color="primary" />
        </div>
      </div>
      <div className='banner'>
        {/* Banner ảnh ở dưới cùng */}
        <Box
          component="img"
          src="https://static.cdnno.com/storage/topbox/5573f07e4e7a3901d1882c9afbdeec5b.webp"
          alt="Banner"
          sx={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            maxHeight: '400px', // Đặt chiều cao tối đa cho banner nếu cần
          }}
        />
      </div>
      <div className='section'>
        <div className='section-content'>
          <Grid2 container spacing={5}>
            <Grid2 size={{ xs: 6, md: 6 }}>
              <RankingList title='THỜI GIAN THỰC' data={rankingData1} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 6 }}>
              <RankingList title='TOP ĐỀ CỬ' data={rankingData2} />
            </Grid2>
          </Grid2>
        </div>
      </div>
      <div className='section'>
        <div className='section-header'>
          <Box sx={{ display: 'flex' }} onClick={handleClick}>
            <Typography
              variant="body"
              sx={{
                flexGrow: 1,
                cursor: 'pointer',
                color: '#fcba03',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              VỪA LÊN CHƯƠNG
            </Typography>
            <DoubleArrowIcon fontSize='12' sx={{ color: '#fcba03', cursor: 'pointer', }} />
          </Box>
        </div>
        <div className='section-content'>
          <BookTable data={rankingData1} />
        </div>
      </div>
      <div className='banner'>
        {/* Banner ảnh ở dưới cùng */}
        <Box
          component="img"
          src="https://static.cdnno.com/storage/topbox/aaa0c263e856a4fd0e948b0f0c6b180f.webp"
          alt="Banner"
          sx={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            maxHeight: '400px', // Đặt chiều cao tối đa cho banner nếu cần
          }}
        />
      </div>
      <div className='section'>
        <div className='section-header'>
          <Box sx={{ display: 'flex' }} onClick={handleClick}>
            <Typography
              variant="body"
              sx={{
                flexGrow: 1,
                cursor: 'pointer',
                color: '#fcba03',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              MỚI HOÀN THÀNH
            </Typography>
            <DoubleArrowIcon fontSize='12' sx={{ color: '#fcba03', cursor: 'pointer', }} />
          </Box>
        </div>
        <div className='section-content'>
          <SwipeableBookList data={rankingData1} />
        </div>
      </div>

      <div className='section'>
        <div className='section-header'>
          <Box sx={{ display: 'flex' }} onClick={handleClick}>
            <Typography
              variant="body"
              sx={{
                flexGrow: 1,
                cursor: 'pointer',
                color: '#fcba03',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              ĐÁNH GIÁ MỚI
            </Typography>
            <DoubleArrowIcon fontSize='12' sx={{ color: '#fcba03', cursor: 'pointer', }} />
          </Box>
        </div>
        <div className='section-content'>
          <ReviewList data={newReview} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;