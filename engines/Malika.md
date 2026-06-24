# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3028<sub>(+61) | 3228<sub>(+58) | 3274<sub>(+30) |  |
| 1.0 | 2026-03-26 | 2967<sub>(+310) | 3170<sub>(+292) | 3244<sub>(+359) |  |
| 0.892 | 2026-02-23 | 2657<sub>(-44) | 2878<sub>(-101) | 2885<sub>(-204) |  |
| 0.418 | 2026-02-07 | 2701 | 2979 | 3089 |  |
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

Generated: 2026-06-24 06:26:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2701, 2657, 2967, 3028]
  line "STC (8.0+0.08s)" [2701, 2657, 2967, 3028]
  line "LTC (60.0+0.60s)" [2979, 2878, 3170, 3228]
  line "VLTC (2m24s+1.12s)" [3089, 2885, 3244, 3274]
  line "VLTC (2m24s+1.12s)" [3089, 2885, 3244, 3274]
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
  line "STC (8.0+0.08s)" [2701, 2657, 2967, 3028]
  line "STC (8.0+0.08s)" [2701, 2657, 2967, 3028]
  line "LTC (60.0+0.60s)" [2979, 2878, 3170, 3228]
  line "VLTC (2m24s+1.12s)" [3089, 2885, 3244, 3274]
  line "VLTC (2m24s+1.12s)" [3089, 2885, 3244, 3274]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3274 | 29 | 330 | 49% | 3282 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3228 | 26 | 430 | 48% | 3243 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3028 | 28 | 394 | 52% | 3012 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 28 | 366 | 50% | 3244 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3170 | 29 | 364 | 50% | 3167 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2967 | 29 | 408 | 52% | 2946 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2885 | 35 | 286 | 49% | 2897 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2878 | 34 | 288 | 49% | 2886 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2657 | 35 | 292 | 52% | 2635 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3089 | 33 | 276 | 50% | 3087 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2979 | 35 | 244 | 52% | 2961 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2701 | 37 | 228 | 51% | 2689 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |