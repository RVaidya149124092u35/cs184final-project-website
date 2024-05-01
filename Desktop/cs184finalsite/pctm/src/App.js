// App.js
import React from 'react';
import Header from './Header';
import Section from './Section';
import IMAGES from './images/index1.js';
import BP from './images/Ball Pivot.png';
import Fish from './images/Poisson.png';
import vid1 from './images/ball radius.mov';
import './App.css';
function App() {
  return (
    <div>
      <Header />
      <Section title="Abstract">
        <p> This report elucidates the ongoing development of a Point Cloud Mesh Reconstruction system, aiming to convert point cloud inputs into usable mesh representations using the Ball Pivot Method. The project also involves testing the system against a repository of existing 3D mesh models. Progress has been made in implementing the Ball Pivot Approximation algorithm, with a focus on bug fixing and enhancing user functionality. Additionally, plans are in place to test the algorithm on datasets lacking pre-existing meshes and potentially explore alternative mesh approximation methods..</p>
      </Section>
      <Section title="Technical Approach">
        <p>The technical approach primarily revolves around implementing the Ball Pivot Approximation algorithm as outlined in the referenced paper. This algorithm operates by rolling a ball along a set of points, adding triangles to the mesh where the ball touches three points. Our implementation maintains an advancing front of the constructed mesh, iteratively finding new triangles to add by pivoting along boundary edges. Key functions include ballPivot for identifying the first point reached during pivoting, findSeedTriangle for initiating a new front if remaining vertices exist, and join and glue for modifying boundary edge topology.</p>
        <p>The Ball Pivot Method operates on the principle of rolling a virtual ball along a set of points in the point cloud. Upon contact with three points, the ball forms a triangle, thus incrementally constructing the mesh. This iterative process is guided by an advancing front strategy, wherein the algorithm dynamically expands the mesh by pivoting along boundary edges and adding new triangles as dictated by the point cloud geometry. Key functions such as ballPivot, findSeedTriangle, join, and glue play pivotal roles in orchestrating this intricate dance of mesh construction.</p>
        <img src={BP} alt="Ball Pivot Illustration" style={{ display: 'block', margin: '20px auto' }} />
        <p>On the other hand, Poisson surface reconstruction leverages the principles of implicit surface modeling to generate a smooth and continuous mesh from the input point cloud. By formulating the reconstruction problem as a Poisson equation, the algorithm seeks to find a function that best fits the input points while adhering to certain boundary conditions. This approach is particularly adept at handling noisy or incomplete point cloud data, as it inherently incorporates regularization techniques to ensure robustness and fidelity in the reconstructed mesh.</p>
        <div className="image-container">
          <img src={Fish} alt="Poisson reconstruction Illustration" title="Possion" width = "1000" height  = "450" style={{ display: 'block', margin: '20px auto' }} />
          <div className="tooltip">Poisson</div>
        </div>      
      </Section>
      <Section title="Problems Encountered and Solutions:">
        <p>One significant challenge encountered was the debugging process, requiring meticulous attention to detail to resolve issues and ensure the reliability of the algorithm. Additionally, the integration of user functionality for mesh construction poses its own set of challenges, requiring careful consideration of interface design and implementation.

To tackle these challenges, a systematic approach to debugging and problem-solving is employed, leveraging collaborative efforts within the project team. Regular testing and validation procedures help identify and address issues in a timely manner, ensuring steady progress towards project goals.</p>
      </Section>
      <Section title="Lessons Learned">
        <p>Through the development process, valuable lessons have been learned regarding the complexities of mesh reconstruction from point cloud data. The importance of thorough testing and validation, as well as the need for effective communication and collaboration within the project team, has been underscored.

Additionally, the iterative nature of algorithm development highlights the significance of adaptability and flexibility in responding to challenges and refining the system. These lessons serve as valuable insights for future projects in the field of point cloud to mesh conversion.</p>
      </Section>
      <Section title="Results">
        <p>The accompanying point cloud viewer demo showcases visualization capabilities, providing insights into the mesh reconstruction process as well as, animations, and videos of the system are also included.</p>
        <video src{vid1} alt="Vid" width = '1000' height = '100'/>
      </Section>
      <Section title="References">
      <a href="http://mesh.brown.edu/taubin/pdfs/bernardini-etal-tvcg99.pdf"> The Ball-Pivoting Algorithm for Surface Reconstruction </a>
      </Section>
    </div>
  );
}

export default App;
