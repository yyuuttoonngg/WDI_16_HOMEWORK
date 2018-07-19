CREATE TABLE planets (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(100),
    image_url VARCHAR(400),
    facts Text,
    link_url VARCHAR(100)
);
INSERT INTO planets (name,image_url) VALUES ('Mercury','https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2015/whatsimporta.jpg');
INSERT INTO planets (name,image_url) VALUES ('Venus','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGh_RbQJYADlSiRgaWaNaefZ-TTsR6KKTDTJkADWUVSDRhtSYsQ');
INSERT INTO planets (name,image_url) VALUES ('Earth','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQw8Cckr8PlISb_2H873NaPZLvWAtGHcgH3ltTotCvxiZ3v7GRRA');