# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2884<sub>(+15) | 3147<sub>(+73) | 3240<sub>(+67) |  |
| 1.3 | 2026-02-15 | 2869<sub>(+255) | 3074<sub>(+294) | 3173<sub>(+226) |  |
| 1.2 | 2025-12-12 | 2614<sub>(+285) | 2780<sub>(+172) | 2947<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2329 | 2608 | 2684 | too many irregular games |
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

Generated: 2026-10-08 04:37:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "" [2329, 2614, 2869, 2884]
  line "STC (8.0+0.08s)" [2329, 2614, 2869, 2884]
  line "LTC (60.0+0.60s)" [2608, 2780, 3074, 3147]
  line "" [2684, 2947, 3173, 3240]
  line "VLTC (2m24s+1.12s)" [2684, 2947, 3173, 3240]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3240 | 41 | 160 | 53% | 3220 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3147 | 43 | 164 | 51% | 3137 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2884 | 44 | 156 | 49% | 2894 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3173 | 100 | 26 | 56% | 3131 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3074 | 75 | 52 | 46% | 3098 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2869 | 123 | 22 | 52% | 2846 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2947 | 158 | 12 | 46% | 2985 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 79 | 52 | 52% | 2762 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2614 | 150 | 16 | 63% | 2493 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2684 | 101 | 32 | 33% | 2827 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2608 | 146 | 16 | 41% | 2693 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2329 | 71 | 70 | 41% | 2404 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |