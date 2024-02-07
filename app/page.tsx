import { FiMoon } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Countries from './components/countries'
import { Button, Dropdown, MenuProps } from "antd";
async function getData() {
  try {
    const res = await fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/countries"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function page() {

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          dark mode
        </a>
      ),
      icon:<FiMoon />
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          light mode
        </a>
      ),
      icon:<FiMoon />
      
    }
  ];
  const data = await getData();
  return (
    <div className="main-container" >
      <header>
        <h2>Where in the world?</h2>
        <span>
          
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Button >light mode</Button>
          </Dropdown>
        </span>
      </header>
      <main>
        <div className="search-hero">
          <div className="search">
            <label htmlFor="search">          <FaSearch />
            </label>
            <input type="search" id="search" placeholder="Search for a country…" />
          </div>

        </div>
        <div className="card-container">
          <Countries countries={data} />

        </div>
      </main>
    </div >
  )
}