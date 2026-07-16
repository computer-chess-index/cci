# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3021<sub>(+55) | 3229<sub>(+62) | 3266<sub>(+23) |  |
| 1.0 | 2026-03-26 | 2966<sub>(+312) | 3167<sub>(+291) | 3243<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2654<sub>(-45) | 2876<sub>(-102) | 2884<sub>(-203) |  |
| 0.418 | 2026-02-07 | 2699 | 2978 | 3087 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Malika+<version>&body=###%20Engine%20name%0AMalika%0A%0A###%20Version%0A1.116" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:26:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2699, 2654, 2966, 3021]
  line "STC (8.0+0.08s)" [2699, 2654, 2966, 3021]
  line "LTC (60.0+0.60s)" [2978, 2876, 3167, 3229]
  line "VLTC (2m24s+1.12s)" [3087, 2884, 3243, 3266]
  line "VLTC (2m24s+1.12s)" [3087, 2884, 3243, 3266]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2699, 2654, 2966, 3021]
  line "STC (8.0+0.08s)" [2699, 2654, 2966, 3021]
  line "LTC (60.0+0.60s)" [2978, 2876, 3167, 3229]
  line "VLTC (2m24s+1.12s)" [3087, 2884, 3243, 3266]
  line "VLTC (2m24s+1.12s)" [3087, 2884, 3243, 3266]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 28 | 358 | 48% | 3279 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3229 | 25 | 466 | 49% | 3240 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3021 | 27 | 422 | 51% | 3011 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 28 | 366 | 50% | 3243 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3167 | 29 | 364 | 50% | 3166 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2966 | 29 | 408 | 52% | 2944 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2884 | 35 | 286 | 49% | 2896 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2876 | 34 | 288 | 49% | 2884 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2654 | 35 | 292 | 52% | 2631 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3087 | 33 | 276 | 50% | 3086 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2978 | 35 | 244 | 52% | 2959 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2699 | 37 | 228 | 51% | 2688 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |