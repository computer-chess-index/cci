# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2657<sub>(+84) | 3078<sub>(+128) | 3131<sub>(+80) |  |
| 2.2.0 | 2026-04-03 | 2573<sub>(-18) | 2950<sub>(+31) | 3051<sub>(+136) |  |
| 2.1.0 | 2026-04-02 | 2591<sub>(+6) | 2919<sub>(-28) | 2915<sub>(-67) |  |
| 2.0.0 | 2026-03-29 | 2585<sub>(+276) | 2947<sub>(+184) | 2982<sub>(+109) |  |
| 1.0.0 | 2026-03-26 | 2309 | 2763 | 2873 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:23:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2309, 2585, 2591, 2573, 2657]
  line "STC (8.0+0.08s)" [2309, 2585, 2591, 2573, 2657]
  line "LTC (60.0+0.60s)" [2763, 2947, 2919, 2950, 3078]
  line "VLTC (2m24s+1.12s)" [2873, 2982, 2915, 3051, 3131]
  line "VLTC (2m24s+1.12s)" [2873, 2982, 2915, 3051, 3131]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3131 | 38 | 202 | 48% | 3148 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3078 | 43 | 150 | 51% | 3074 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2657 | 50 | 128 | 50% | 2658 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3051 | 34 | 242 | 51% | 3046 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2950 | 35 | 238 | 50% | 2944 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2573 | 34 | 274 | 50% | 2572 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2915 | 31 | 292 | 49% | 2925 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2919 | 34 | 248 | 49% | 2923 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2591 | 35 | 256 | 48% | 2603 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2982 | 31 | 288 | 49% | 2989 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2947 | 32 | 280 | 51% | 2939 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2585 | 30 | 336 | 48% | 2600 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 32 | 302 | 49% | 2882 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2763 | 34 | 268 | 48% | 2781 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2309 | 35 | 272 | 46% | 2345 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |