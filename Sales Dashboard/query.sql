-- I wanted to join "courses" table (teacher) with "teachers" table (name)

SELECT
  courses.title,
  teacher.location
FROM courses
INNER JOIN teacher ON courses.teacher = teacher.name

-- previous query 
select
	name,
	sum(value)
from
	sales_deals
group by
	name;

-- Challenge:
-- 1) Write an updated SQL query below
-- 2) Start by selecting FROM the 'sales_deals' table since we need to sum the 
--    values
-- 3) Join with 'user_profiles' to get the names
-- 4) Your query should show each rep's name and their total sales value
-- 5) Be explicit (table_name.column)
-- HINT: for extra help, use Cmd/Ctrl + y to reread the 'Update SQL query' slide

SELECT 
	sum(sales_deals.value),
	user_profiles.name
FROM sales_deals
INNER JOIN user_profiles ON sales_deals.user_id = user_profiles.id
GROUP BY user_profiles.name;
