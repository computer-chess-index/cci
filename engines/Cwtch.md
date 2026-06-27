# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5 | 2026-04-06 | 2870<sub>(+35) | 3125<sub>(+51) | 3194<sub>(+75) |  |
| 4 | 2025-12-05 | 2835<sub>(+new) | 3074<sub>(+new) | 3119<sub>(+new) |  |
| 3 | 2025-09-27 |  |  |  |  |
| 2 | 2025-09-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-27 06:23:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5"]
  y-axis "Elo Rating" 2800 --> 3200
  line "STC (8.0+0.08s)" [2835, 2870]
  line "STC (8.0+0.08s)" [2835, 2870]
  line "LTC (60.0+0.60s)" [3074, 3125]
  line "VLTC (2m24s+1.12s)" [3119, 3194]
  line "VLTC (2m24s+1.12s)" [3119, 3194]
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
  x-axis ["4", "5"]
  y-axis "Elo Rating" 2800 --> 3200
  line "STC (8.0+0.08s)" [2835, 2870]
  line "STC (8.0+0.08s)" [2835, 2870]
  line "LTC (60.0+0.60s)" [3074, 3125]
  line "VLTC (2m24s+1.12s)" [3119, 3194]
  line "VLTC (2m24s+1.12s)" [3119, 3194]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3194 | 25 | 438 | 48% | 3216 | 59% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3125 | 28 | 346 | 50% | 3124 | 56% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2870 | 28 | 384 | 49% | 2882 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 26 | 428 | 50% | 3119 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3074 | 27 | 376 | 53% | 3048 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2835 | 25 | 482 | 53% | 2803 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |