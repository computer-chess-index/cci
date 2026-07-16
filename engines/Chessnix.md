# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2865<sub>(+new) | 3125<sub>(+new) | 3217<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2853<sub>(+256) | 3051<sub>(+289) | 3152<sub>(+224) |  |
| 1.2 | 2025-12-12 | 2597<sub>(+284) | 2762<sub>(+173) | 2928<sub>(+264) |  |
| 1.0 | 2025-11-08 | 2313<sub>(+new) | 2589<sub>(+new) | 2664<sub>(+new) | too many irregular games |
| 0.1 | 2025-10-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:23:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2313, 2597, 2853, 2865]
  line "STC (8.0+0.08s)" [2313, 2597, 2853, 2865]
  line "LTC (60.0+0.60s)" [2589, 2762, 3051, 3125]
  line "VLTC (2m24s+1.12s)" [2664, 2928, 3152, 3217]
  line "VLTC (2m24s+1.12s)" [2664, 2928, 3152, 3217]
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
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2313, 2597, 2853, 2865]
  line "STC (8.0+0.08s)" [2313, 2597, 2853, 2865]
  line "LTC (60.0+0.60s)" [2589, 2762, 3051, 3125]
  line "VLTC (2m24s+1.12s)" [2664, 2928, 3152, 3217]
  line "VLTC (2m24s+1.12s)" [2664, 2928, 3152, 3217]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3217 | 41 | 160 | 53% | 3197 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3125 | 43 | 164 | 51% | 3116 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2865 | 44 | 156 | 49% | 2876 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3152 | 100 | 26 | 56% | 3109 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3051 | 75 | 52 | 46% | 3075 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2853 | 123 | 22 | 52% | 2830 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2928 | 158 | 12 | 46% | 2966 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2762 | 79 | 52 | 52% | 2745 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2597 | 150 | 16 | 63% | 2476 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2664 | 101 | 32 | 33% | 2807 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2589 | 145 | 16 | 41% | 2674 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2313 | 71 | 70 | 41% | 2388 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |