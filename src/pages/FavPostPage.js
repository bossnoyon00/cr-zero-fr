import React, { useState } from 'react'
import { Input, Select } from 'antd'

import Layout from '../layout/Layout'
import Post from '../components/PageComponents/Post'
import Avatar1 from '../assets/avatar1.jpg'
import Avatar2 from '../assets/avatar2.jpg'
import Avatar3 from '../assets/avatar3.jpg'
import Avatar4 from '../assets/avatar4.jpg'

const FavPostPage = () => {
  const [liked, setLiked] = useState([0, 1, 2, 3])

  const posts = [
    {
      key: 0,
      img: Avatar1,
      title: 'Post Title 1',
      createdAt: '24 Apr at 3:30',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui. Faucibus nisl tincidunt eget nullam non nisi est sit. Purus sit amet luctus venenatis. Tortor dignissim convallis aenean et tortor at risus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Enim sit amet venenatis urna cursus eget nunc scelerisque. Ut tellus elementum sagittis vitae et leo duis ut. Et ultrices neque ornare aenean euismod elementum nisi quis. Scelerisque purus semper eget duis at. Lectus magna fringilla urna porttitor. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Vitae tempus quam pellentesque nec nam aliquam. Id semper risus in hendrerit gravida rutrum quisque. Ante in nibh mauris cursus mattis molestie. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Porttitor lacus luctus accumsan tortor posuere. At augue eget arcu dictum varius duis at consectetur lorem. Arcu non sodales neque sodales ut etiam. In fermentum posuere urna nec. Eget sit amet tellus cras adipiscing. Quis auctor elit sed vulputate mi. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Faucibus nisl tincidunt eget nullam. Cursus euismod quis viverra nibh. Turpis massa tincidunt dui ut ornare lectus sit amet. Tempor orci dapibus ultrices in iaculis nunc sed augue. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. In metus vulputate eu scelerisque felis imperdiet proin. Sagittis vitae et leo duis ut. Non blandit massa enim nec dui nunc mattis enim. Viverra tellus in hac habitasse platea. Phasellus faucibus scelerisque eleifend donec pretium. Elementum facilisis leo vel fringilla. Tellus cras adipiscing enim eu. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. In nibh mauris cursus mattis molestie a iaculis. Id neque aliquam vestibulum morbi. Diam quis enim lobortis scelerisque fermentum dui faucibus. Id faucibus nisl tincidunt eget. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Tempus imperdiet nulla malesuada pellentesque elit eget. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Tincidunt lobortis feugiat vivamus at augue eget. Euismod quis viverra nibh cras pulvinar mattis nunc. Mi proin sed libero enim sed faucibus. Non nisi est sit amet facilisis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Viverra vitae congue eu consequat ac felis donec. Nisi lacus sed viverra tellus. Condimentum lacinia quis vel eros donec ac odio. Suspendisse faucibus interdum posuere lorem ipsum. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Faucibus et molestie ac feugiat sed lectus. Id porta nibh venenatis cras sed felis eget velit aliquet. Velit dignissim sodales ut eu sem integer. Elit sed vulputate mi sit amet mauris. Eget egestas purus viverra accumsan in nisl nisi. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Sem viverra aliquet eget sit amet tellus cras adipiscing. Diam sollicitudin tempor id eu. Blandit cursus risus at ultrices. Leo vel orci porta non pulvinar. Varius sit amet mattis vulputate enim nulla aliquet. Eu non diam phasellus vestibulum lorem sed. Erat imperdiet sed euismod nisi porta. Sit amet nulla facilisi morbi tempus iaculis urna id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Commodo odio aenean sed adipiscing diam donec adipiscing. Enim ut tellus elementum sagittis vitae et. Nulla at volutpat diam ut venenatis. Placerat in egestas erat imperdiet. Lectus urna duis convallis convallis tellus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Fusce id velit ut tortor pretium viverra suspendisse potenti. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Sem et tortor consequat id porta nibh venenatis cras sed. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Amet dictum sit amet justo. Quis imperdiet massa tincidunt nunc. Purus viverra accumsan in nisl nisi scelerisque. Facilisi morbi tempus iaculis urna id. Magna etiam tempor orci eu lobortis elementum nibh tellus. Id velit ut tortor pretium viverra suspendisse. Lacus luctus accumsan tortor posuere ac ut consequat semper. Facilisis gravida neque convallis a cras. Sit amet justo donec enim diam vulputate. Quis lectus nulla at volutpat diam ut. Adipiscing commodo elit at imperdiet. At quis risus sed vulputate odio ut enim blandit volutpat. Nunc id cursus metus aliquam eleifend mi in nulla. Congue eu consequat ac felis donec et odio. Eget sit amet tellus cras adipiscing enim. Etiam non quam lacus suspendisse. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Bibendum est ultricies integer quis auctor. Adipiscing tristique risus nec feugiat in fermentum posuere. In eu mi bibendum neque egestas congue quisque egestas. Vulputate ut pharetra sit amet aliquam id diam. Non blandit massa enim nec dui nunc mattis. Nam at lectus urna duis convallis. Sit amet venenatis urna cursus. Velit sed ullamcorper morbi tincidunt ornare. Cursus risus at ultrices mi tempus. Hendrerit gravida rutrum quisque non tellus. Magna fermentum iaculis eu non diam phasellus vestibulum. Habitant morbi tristique senectus et netus. Vel pretium lectus quam id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis auctor. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Id semper risus in hendrerit gravida rutrum quisque. Enim ut tellus elementum sagittis vitae et leo. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Mi tempus imperdiet nulla malesuada pellentesque. Sapien eget mi proin sed. Condimentum lacinia quis vel eros donec. Euismod elementum nisi quis eleifend quam. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Tellus rutrum tellus pellentesque eu. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada. Tortor aliquam nulla facilisi cras fermentum odio. Interdum posuere lorem ipsum dolor sit amet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Quam lacus suspendisse faucibus interdum posuere. Nec ullamcorper sit amet risus. Semper quis lectus nulla at volutpat diam ut venenatis. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Risus ultricies tristique nulla aliquet enim. Nibh tortor id aliquet lectus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pellentesque id nibh tortor id aliquet lectus. Facilisis gravida neque convallis a cras semper auctor. Interdum velit laoreet id donec ultrices tincidunt. Nisi est sit amet facilisis. In pellentesque massa placerat duis ultricies lacus sed. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ornare lectus sit amet est placerat in egestas erat imperdiet. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Turpis tincidunt id aliquet risus feugiat in ante metus. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Lectus mauris ultrices eros in cursus. Amet risus nullam eget felis eget. Id interdum velit laoreet id donec ultrices. Nisl suscipit adipiscing bibendum est ultricies integer quis. Ac tortor dignissim convallis aenean et tortor at risus viverra. Faucibus pulvinar elementum integer enim.',
      price: 20000,
      commission: 'Cash',
      category: 'Game',
      type: 'Digital',
      comments: [
        {
          name: 'Daniel DP',
          date: '24 Apr at 3:30',
          comment: 'What lights do you use',
        },
        {
          name: 'Maria Alexander',
          date: '24 Apr at 3:30',
          comment: 'My dream desk setup',
        },
        {
          name: 'Sherri Wronski',
          date: '24 Apr at 3:30',
          comment: 'Absolutely gorgeous !!!',
        },
      ],
    },
    {
      key: 1,
      img: Avatar2,
      title: 'Post Title 2',
      createdAt: '22 Apr at 1:15',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui. Faucibus nisl tincidunt eget nullam non nisi est sit. Purus sit amet luctus venenatis. Tortor dignissim convallis aenean et tortor at risus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Enim sit amet venenatis urna cursus eget nunc scelerisque. Ut tellus elementum sagittis vitae et leo duis ut. Et ultrices neque ornare aenean euismod elementum nisi quis. Scelerisque purus semper eget duis at. Lectus magna fringilla urna porttitor. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Vitae tempus quam pellentesque nec nam aliquam. Id semper risus in hendrerit gravida rutrum quisque. Ante in nibh mauris cursus mattis molestie. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Porttitor lacus luctus accumsan tortor posuere. At augue eget arcu dictum varius duis at consectetur lorem. Arcu non sodales neque sodales ut etiam. In fermentum posuere urna nec. Eget sit amet tellus cras adipiscing. Quis auctor elit sed vulputate mi. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Faucibus nisl tincidunt eget nullam. Cursus euismod quis viverra nibh. Turpis massa tincidunt dui ut ornare lectus sit amet. Tempor orci dapibus ultrices in iaculis nunc sed augue. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. In metus vulputate eu scelerisque felis imperdiet proin. Sagittis vitae et leo duis ut. Non blandit massa enim nec dui nunc mattis enim. Viverra tellus in hac habitasse platea. Phasellus faucibus scelerisque eleifend donec pretium. Elementum facilisis leo vel fringilla. Tellus cras adipiscing enim eu. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. In nibh mauris cursus mattis molestie a iaculis. Id neque aliquam vestibulum morbi. Diam quis enim lobortis scelerisque fermentum dui faucibus. Id faucibus nisl tincidunt eget. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Tempus imperdiet nulla malesuada pellentesque elit eget. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Tincidunt lobortis feugiat vivamus at augue eget. Euismod quis viverra nibh cras pulvinar mattis nunc. Mi proin sed libero enim sed faucibus. Non nisi est sit amet facilisis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Viverra vitae congue eu consequat ac felis donec. Nisi lacus sed viverra tellus. Condimentum lacinia quis vel eros donec ac odio. Suspendisse faucibus interdum posuere lorem ipsum. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Faucibus et molestie ac feugiat sed lectus. Id porta nibh venenatis cras sed felis eget velit aliquet. Velit dignissim sodales ut eu sem integer. Elit sed vulputate mi sit amet mauris. Eget egestas purus viverra accumsan in nisl nisi. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Sem viverra aliquet eget sit amet tellus cras adipiscing. Diam sollicitudin tempor id eu. Blandit cursus risus at ultrices. Leo vel orci porta non pulvinar. Varius sit amet mattis vulputate enim nulla aliquet. Eu non diam phasellus vestibulum lorem sed. Erat imperdiet sed euismod nisi porta. Sit amet nulla facilisi morbi tempus iaculis urna id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Commodo odio aenean sed adipiscing diam donec adipiscing. Enim ut tellus elementum sagittis vitae et. Nulla at volutpat diam ut venenatis. Placerat in egestas erat imperdiet. Lectus urna duis convallis convallis tellus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Fusce id velit ut tortor pretium viverra suspendisse potenti. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Sem et tortor consequat id porta nibh venenatis cras sed. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Amet dictum sit amet justo. Quis imperdiet massa tincidunt nunc. Purus viverra accumsan in nisl nisi scelerisque. Facilisi morbi tempus iaculis urna id. Magna etiam tempor orci eu lobortis elementum nibh tellus. Id velit ut tortor pretium viverra suspendisse. Lacus luctus accumsan tortor posuere ac ut consequat semper. Facilisis gravida neque convallis a cras. Sit amet justo donec enim diam vulputate. Quis lectus nulla at volutpat diam ut. Adipiscing commodo elit at imperdiet. At quis risus sed vulputate odio ut enim blandit volutpat. Nunc id cursus metus aliquam eleifend mi in nulla. Congue eu consequat ac felis donec et odio. Eget sit amet tellus cras adipiscing enim. Etiam non quam lacus suspendisse. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Bibendum est ultricies integer quis auctor. Adipiscing tristique risus nec feugiat in fermentum posuere. In eu mi bibendum neque egestas congue quisque egestas. Vulputate ut pharetra sit amet aliquam id diam. Non blandit massa enim nec dui nunc mattis. Nam at lectus urna duis convallis. Sit amet venenatis urna cursus. Velit sed ullamcorper morbi tincidunt ornare. Cursus risus at ultrices mi tempus. Hendrerit gravida rutrum quisque non tellus. Magna fermentum iaculis eu non diam phasellus vestibulum. Habitant morbi tristique senectus et netus. Vel pretium lectus quam id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis auctor. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Id semper risus in hendrerit gravida rutrum quisque. Enim ut tellus elementum sagittis vitae et leo. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Mi tempus imperdiet nulla malesuada pellentesque. Sapien eget mi proin sed. Condimentum lacinia quis vel eros donec. Euismod elementum nisi quis eleifend quam. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Tellus rutrum tellus pellentesque eu. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada. Tortor aliquam nulla facilisi cras fermentum odio. Interdum posuere lorem ipsum dolor sit amet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Quam lacus suspendisse faucibus interdum posuere. Nec ullamcorper sit amet risus. Semper quis lectus nulla at volutpat diam ut venenatis. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Risus ultricies tristique nulla aliquet enim. Nibh tortor id aliquet lectus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pellentesque id nibh tortor id aliquet lectus. Facilisis gravida neque convallis a cras semper auctor. Interdum velit laoreet id donec ultrices tincidunt. Nisi est sit amet facilisis. In pellentesque massa placerat duis ultricies lacus sed. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ornare lectus sit amet est placerat in egestas erat imperdiet. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Turpis tincidunt id aliquet risus feugiat in ante metus. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Lectus mauris ultrices eros in cursus. Amet risus nullam eget felis eget. Id interdum velit laoreet id donec ultrices. Nisl suscipit adipiscing bibendum est ultricies integer quis. Ac tortor dignissim convallis aenean et tortor at risus viverra. Faucibus pulvinar elementum integer enim.',
      price: 1000,
      commission: 'Reward',
      category: 'Attire',
      type: 'Physical',
      comments: [
        {
          name: 'Daniel DP',
          date: '24 Apr at 3:30',
          comment: 'What lights do you use',
        },
        {
          name: 'Jhon Doe',
          date: '24 Apr at 3:30',
          comment: 'Nice Station',
        },
      ],
    },
    {
      key: 2,
      img: Avatar3,
      title: 'Post Title 3',
      createdAt: '21 Apr at 0:20',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui. Faucibus nisl tincidunt eget nullam non nisi est sit. Purus sit amet luctus venenatis. Tortor dignissim convallis aenean et tortor at risus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Enim sit amet venenatis urna cursus eget nunc scelerisque. Ut tellus elementum sagittis vitae et leo duis ut. Et ultrices neque ornare aenean euismod elementum nisi quis. Scelerisque purus semper eget duis at. Lectus magna fringilla urna porttitor. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Vitae tempus quam pellentesque nec nam aliquam. Id semper risus in hendrerit gravida rutrum quisque. Ante in nibh mauris cursus mattis molestie. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Porttitor lacus luctus accumsan tortor posuere. At augue eget arcu dictum varius duis at consectetur lorem. Arcu non sodales neque sodales ut etiam. In fermentum posuere urna nec. Eget sit amet tellus cras adipiscing. Quis auctor elit sed vulputate mi. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Faucibus nisl tincidunt eget nullam. Cursus euismod quis viverra nibh. Turpis massa tincidunt dui ut ornare lectus sit amet. Tempor orci dapibus ultrices in iaculis nunc sed augue. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. In metus vulputate eu scelerisque felis imperdiet proin. Sagittis vitae et leo duis ut. Non blandit massa enim nec dui nunc mattis enim. Viverra tellus in hac habitasse platea. Phasellus faucibus scelerisque eleifend donec pretium. Elementum facilisis leo vel fringilla. Tellus cras adipiscing enim eu. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. In nibh mauris cursus mattis molestie a iaculis. Id neque aliquam vestibulum morbi. Diam quis enim lobortis scelerisque fermentum dui faucibus. Id faucibus nisl tincidunt eget. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Tempus imperdiet nulla malesuada pellentesque elit eget. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Tincidunt lobortis feugiat vivamus at augue eget. Euismod quis viverra nibh cras pulvinar mattis nunc. Mi proin sed libero enim sed faucibus. Non nisi est sit amet facilisis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Viverra vitae congue eu consequat ac felis donec. Nisi lacus sed viverra tellus. Condimentum lacinia quis vel eros donec ac odio. Suspendisse faucibus interdum posuere lorem ipsum. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Faucibus et molestie ac feugiat sed lectus. Id porta nibh venenatis cras sed felis eget velit aliquet. Velit dignissim sodales ut eu sem integer. Elit sed vulputate mi sit amet mauris. Eget egestas purus viverra accumsan in nisl nisi. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Sem viverra aliquet eget sit amet tellus cras adipiscing. Diam sollicitudin tempor id eu. Blandit cursus risus at ultrices. Leo vel orci porta non pulvinar. Varius sit amet mattis vulputate enim nulla aliquet. Eu non diam phasellus vestibulum lorem sed. Erat imperdiet sed euismod nisi porta. Sit amet nulla facilisi morbi tempus iaculis urna id. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Commodo odio aenean sed adipiscing diam donec adipiscing. Enim ut tellus elementum sagittis vitae et. Nulla at volutpat diam ut venenatis. Placerat in egestas erat imperdiet. Lectus urna duis convallis convallis tellus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Fusce id velit ut tortor pretium viverra suspendisse potenti. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Sem et tortor consequat id porta nibh venenatis cras sed. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Amet dictum sit amet justo. Quis imperdiet massa tincidunt nunc. Purus viverra accumsan in nisl nisi scelerisque. Facilisi morbi tempus iaculis urna id. Magna etiam tempor orci eu lobortis elementum nibh tellus. Id velit ut tortor pretium viverra suspendisse. Lacus luctus accumsan tortor posuere ac ut consequat semper. Facilisis gravida neque convallis a cras. Sit amet justo donec enim diam vulputate. Quis lectus nulla at volutpat diam ut. Adipiscing commodo elit at imperdiet. At quis risus sed vulputate odio ut enim blandit volutpat. Nunc id cursus metus aliquam eleifend mi in nulla. Congue eu consequat ac felis donec et odio. Eget sit amet tellus cras adipiscing enim. Etiam non quam lacus suspendisse. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Bibendum est ultricies integer quis auctor. Adipiscing tristique risus nec feugiat in fermentum posuere. In eu mi bibendum neque egestas congue quisque egestas. Vulputate ut pharetra sit amet aliquam id diam. Non blandit massa enim nec dui nunc mattis. Nam at lectus urna duis convallis. Sit amet venenatis urna cursus. Velit sed ullamcorper morbi tincidunt ornare. Cursus risus at ultrices mi tempus. Hendrerit gravida rutrum quisque non tellus. Magna fermentum iaculis eu non diam phasellus vestibulum. Habitant morbi tristique senectus et netus. Vel pretium lectus quam id leo in vitae turpis massa. Suscipit adipiscing bibendum est ultricies integer quis auctor. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Id semper risus in hendrerit gravida rutrum quisque. Enim ut tellus elementum sagittis vitae et leo. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Mi tempus imperdiet nulla malesuada pellentesque. Sapien eget mi proin sed. Condimentum lacinia quis vel eros donec. Euismod elementum nisi quis eleifend quam. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Tellus rutrum tellus pellentesque eu. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada. Tortor aliquam nulla facilisi cras fermentum odio. Interdum posuere lorem ipsum dolor sit amet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Quam lacus suspendisse faucibus interdum posuere. Nec ullamcorper sit amet risus. Semper quis lectus nulla at volutpat diam ut venenatis. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Risus ultricies tristique nulla aliquet enim. Nibh tortor id aliquet lectus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pellentesque id nibh tortor id aliquet lectus. Facilisis gravida neque convallis a cras semper auctor. Interdum velit laoreet id donec ultrices tincidunt. Nisi est sit amet facilisis. In pellentesque massa placerat duis ultricies lacus sed. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ornare lectus sit amet est placerat in egestas erat imperdiet. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Turpis tincidunt id aliquet risus feugiat in ante metus. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Lectus mauris ultrices eros in cursus. Amet risus nullam eget felis eget. Id interdum velit laoreet id donec ultrices. Nisl suscipit adipiscing bibendum est ultricies integer quis. Ac tortor dignissim convallis aenean et tortor at risus viverra. Faucibus pulvinar elementum integer enim.',
      price: 45000,
      commission: 'Reward',
      category: 'Course',
      type: 'Digital',
      comments: [
        {
          name: 'Daniel DP',
          date: '24 Apr at 3:30',
          comment: 'What lights do you use',
        },
        {
          name: 'Maria Alexander',
          date: '24 Apr at 3:30',
          comment: 'My dream desk setup',
        },
        {
          name: 'Sherri Wronski',
          date: '24 Apr at 3:30',
          comment: 'Absolutely gorgeous !!!',
        },
        {
          name: 'Sherri Wronski',
          date: '24 Apr at 3:30',
          comment: 'Absolutely gorgeous !!!',
        },
      ],
    },
    {
      key: 3,
      img: Avatar4,
      title: 'Post Title 4',
      createdAt: '17 Apr at 17:22',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English ...',
      price: 9000,
      commission: 'Reward',
      category: 'Jewlery',
      type: 'Digital',
      comments: [
        {
          name: 'Daniel DP',
          date: '24 Apr at 3:30',
          comment: 'What lights do you use',
        },
        {
          name: 'Maria Alexander',
          date: '24 Apr at 3:30',
          comment: 'My dream desk setup',
        },
        {
          name: 'Sherri Wronski',
          date: '24 Apr at 3:30',
          comment: 'Absolutely gorgeous !!!',
        },
        {
          name: 'Sherri Wronski',
          date: '24 Apr at 3:30',
          comment: 'Absolutely gorgeous !!!',
        },
      ],
    },
  ]

  const options = [
    {
      value: '200 - 400',
      label: '200 - 400',
    },
    {
      value: '400 - 600',
      label: '400 - 600',
    },
    {
      value: '600 - 800',
      label: '600 - 800',
    },
    {
      value: '800 - 1000',
      label: '800 - 1000',
    },
  ]

  const countries = [
    {
      value: 'pakistan',
      label: 'Pakistan',
    },
    {
      value: 'iran',
      label: 'Iran',
    },
  ]

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <Layout>
      <div className='fav-container'>
        <div className='page-header'>
          <Input placeholder='Search Programs ...' className='fav-header-input' />
          <Select
            placeholder='200 - 400'
            style={{
              width: 150,
            }}
            onChange={handleChange}
            options={options}
          />
          <Select
            placeholder='Country'
            style={{
              width: 150,
            }}
            onChange={handleChange}
            options={countries}
          />
        </div>
        <div className='post-list-container'>
          {posts?.map((data, index) => {
            return <Post key={index} data={data} liked={liked} setLiked={setLiked} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default FavPostPage
