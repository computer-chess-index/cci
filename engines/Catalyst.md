# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2655<sub>(+83) | 3078<sub>(+130) | 3129<sub>(+79) |  |
| 2.2.0 | 2026-04-03 | 2572<sub>(-17) | 2948<sub>(+31) | 3050<sub>(+137) |  |
| 2.1.0 | 2026-04-02 | 2589<sub>(+5) | 2917<sub>(-29) | 2913<sub>(-68) |  |
| 2.0.0 | 2026-03-29 | 2584<sub>(+275) | 2946<sub>(+184) | 2981<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2309 | 2762 | 2873 |  |
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

Generated: 2026-08-22 06:23:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "STC (8.0+0.08s)" [2309, 2584, 2589, 2572, 2655]
  line "STC (8.0+0.08s)" [2309, 2584, 2589, 2572, 2655]
  line "LTC (60.0+0.60s)" [2762, 2946, 2917, 2948, 3078]
  line "VLTC (2m24s+1.12s)" [2873, 2981, 2913, 3050, 3129]
  line "VLTC (2m24s+1.12s)" [2873, 2981, 2913, 3050, 3129]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3129 | 38 | 202 | 48% | 3147 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3078 | 43 | 150 | 51% | 3073 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2655 | 50 | 128 | 50% | 2657 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3050 | 34 | 242 | 51% | 3044 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2948 | 35 | 238 | 50% | 2943 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2572 | 34 | 274 | 50% | 2572 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2913 | 31 | 292 | 49% | 2924 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2917 | 34 | 248 | 49% | 2921 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2589 | 35 | 256 | 48% | 2603 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2981 | 31 | 288 | 49% | 2988 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2946 | 32 | 280 | 51% | 2938 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2584 | 30 | 336 | 48% | 2599 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 32 | 302 | 49% | 2881 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2762 | 34 | 268 | 48% | 2780 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2309 | 35 | 272 | 46% | 2345 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |