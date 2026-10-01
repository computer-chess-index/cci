# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2665<sub>(+84) | 3087<sub>(+128) | 3140<sub>(+80) |  |
| 2.2.0 | 2026-04-03 | 2581<sub>(-18) | 2959<sub>(+32) | 3060<sub>(+137) |  |
| 2.1.0 | 2026-04-02 | 2599<sub>(+6) | 2927<sub>(-30) | 2923<sub>(-67) |  |
| 2.0.0 | 2026-03-29 | 2593<sub>(+278) | 2957<sub>(+185) | 2990<sub>(+109) |  |
| 1.0.0 | 2026-03-26 | 2315 | 2772 | 2881 |  |
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

Generated: 2026-10-01 04:36:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2300 --> 3200
  line "" [2315, 2593, 2599, 2581, 2665]
  line "STC (8.0+0.08s)" [2315, 2593, 2599, 2581, 2665]
  line "LTC (60.0+0.60s)" [2772, 2957, 2927, 2959, 3087]
  line "" [2881, 2990, 2923, 3060, 3140]
  line "VLTC (2m24s+1.12s)" [2881, 2990, 2923, 3060, 3140]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3140 | 38 | 202 | 48% | 3158 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3087 | 43 | 150 | 51% | 3083 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2665 | 50 | 128 | 50% | 2666 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3060 | 34 | 242 | 51% | 3055 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2959 | 35 | 238 | 50% | 2952 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2581 | 34 | 274 | 50% | 2581 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2923 | 31 | 292 | 49% | 2934 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2927 | 34 | 248 | 49% | 2931 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2599 | 35 | 256 | 48% | 2612 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2990 | 31 | 288 | 49% | 2997 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2957 | 32 | 280 | 51% | 2947 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2593 | 30 | 336 | 48% | 2608 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2881 | 32 | 302 | 49% | 2890 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 34 | 268 | 48% | 2789 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2315 | 35 | 272 | 46% | 2352 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |