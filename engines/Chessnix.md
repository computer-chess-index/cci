# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2877<sub>(+14) | 3140<sub>(+74) | 3233<sub>(+67) |  |
| 1.3 | 2026-02-15 | 2863<sub>(+255) | 3066<sub>(+293) | 3166<sub>(+226) |  |
| 1.2 | 2025-12-12 | 2608<sub>(+283) | 2773<sub>(+172) | 2940<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2325 | 2601 | 2677 | too many irregular games |
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

Generated: 2026-09-06 06:23:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "" [2325, 2608, 2863, 2877]
  line "STC (8.0+0.08s)" [2325, 2608, 2863, 2877]
  line "LTC (60.0+0.60s)" [2601, 2773, 3066, 3140]
  line "" [2677, 2940, 3166, 3233]
  line "VLTC (2m24s+1.12s)" [2677, 2940, 3166, 3233]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3233 | 41 | 160 | 53% | 3213 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3140 | 43 | 164 | 51% | 3131 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2877 | 44 | 156 | 49% | 2888 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3166 | 100 | 26 | 56% | 3124 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3066 | 75 | 52 | 46% | 3090 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2863 | 123 | 22 | 52% | 2840 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2940 | 158 | 12 | 46% | 2977 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2773 | 79 | 52 | 52% | 2757 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2608 | 150 | 16 | 63% | 2488 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2677 | 101 | 32 | 33% | 2820 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2601 | 146 | 16 | 41% | 2687 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2325 | 71 | 70 | 41% | 2400 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |