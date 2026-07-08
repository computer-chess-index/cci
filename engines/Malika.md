# Engine: Malika

Author: Fauzi Dabat Akram

Home: https://github.com/FauziAkram/Malika-releases

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.116 | 2026-05-07 | 3028<sub>(+59) | 3231<sub>(+60) | 3270<sub>(+25) |  |
| 1.0 | 2026-03-26 | 2969<sub>(+311) | 3171<sub>(+291) | 3245<sub>(+357) |  |
| 0.892 | 2026-02-23 | 2658<sub>(-45) | 2880<sub>(-101) | 2888<sub>(-202) |  |
| 0.418 | 2026-02-07 | 2703 | 2981 | 3090 |  |
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

Generated: 2026-07-08 06:26:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.418", "0.892", "1.0", "1.116"]
  y-axis "Elo Rating" 2600 --> 3300
  line "STC (8.0+0.08s)" [2703, 2658, 2969, 3028]
  line "STC (8.0+0.08s)" [2703, 2658, 2969, 3028]
  line "LTC (60.0+0.60s)" [2981, 2880, 3171, 3231]
  line "VLTC (2m24s+1.12s)" [3090, 2888, 3245, 3270]
  line "VLTC (2m24s+1.12s)" [3090, 2888, 3245, 3270]
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
  line "STC (8.0+0.08s)" [2703, 2658, 2969, 3028]
  line "STC (8.0+0.08s)" [2703, 2658, 2969, 3028]
  line "LTC (60.0+0.60s)" [2981, 2880, 3171, 3231]
  line "VLTC (2m24s+1.12s)" [3090, 2888, 3245, 3270]
  line "VLTC (2m24s+1.12s)" [3090, 2888, 3245, 3270]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.116 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 29 | 346 | 48% | 3283 | 49% |
| 1.116 | LTC <sub>(60.0+0.60s)</sub> | 3231 | 26 | 446 | 48% | 3243 | 46% |
| 1.116 | STC <sub>(8.0+0.08s)</sub> | 3028 | 28 | 402 | 51% | 3013 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3245 | 28 | 366 | 50% | 3245 | 46% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3171 | 29 | 364 | 50% | 3168 | 39% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2969 | 29 | 408 | 52% | 2947 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.892 | VLTC <sub>(2m24s+1.12s)</sub> | 2888 | 35 | 286 | 49% | 2898 | 23% |
| 0.892 | LTC <sub>(60.0+0.60s)</sub> | 2880 | 34 | 288 | 49% | 2888 | 25% |
| 0.892 | STC <sub>(8.0+0.08s)</sub> | 2658 | 35 | 292 | 52% | 2635 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.418 | VLTC <sub>(2m24s+1.12s)</sub> | 3090 | 33 | 276 | 50% | 3089 | 46% |
| 0.418 | LTC <sub>(60.0+0.60s)</sub> | 2981 | 35 | 244 | 52% | 2962 | 42% |
| 0.418 | STC <sub>(8.0+0.08s)</sub> | 2703 | 37 | 228 | 51% | 2691 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |