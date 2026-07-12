# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2to6 | 2026-07-09 |  |  |  |  |
| 6 | 2026-07-06 | 3008<sub>(+134) | 3241<sub>(+110) | 3275<sub>(+77) |  |
| 5 | 2026-04-06 | 2874<sub>(+35) | 3131<sub>(+53) | 3198<sub>(+75) |  |
| 4 | 2025-12-05 | 2839<sub>(+new) | 3078<sub>(+new) | 3123<sub>(+new) |  |
| 3 | 2025-09-27 |  |  |  |  |
| 2 | 2025-09-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A2to6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-12 06:24:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2839, 2874, 3008]
  line "STC (8.0+0.08s)" [2839, 2874, 3008]
  line "LTC (60.0+0.60s)" [3078, 3131, 3241]
  line "VLTC (2m24s+1.12s)" [3123, 3198, 3275]
  line "VLTC (2m24s+1.12s)" [3123, 3198, 3275]
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
  x-axis ["4", "5", "6"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2839, 2874, 3008]
  line "STC (8.0+0.08s)" [2839, 2874, 3008]
  line "LTC (60.0+0.60s)" [3078, 3131, 3241]
  line "VLTC (2m24s+1.12s)" [3123, 3198, 3275]
  line "VLTC (2m24s+1.12s)" [3123, 3198, 3275]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3275 | 36 | 196 | 52% | 3260 | 66% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3241 | 37 | 190 | 53% | 3222 | 63% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3008 | 32 | 276 | 45% | 3044 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3198 | 25 | 438 | 48% | 3220 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 28 | 358 | 50% | 3128 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2874 | 28 | 396 | 49% | 2886 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 26 | 428 | 50% | 3123 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3078 | 27 | 376 | 53% | 3052 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2839 | 25 | 482 | 53% | 2807 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |