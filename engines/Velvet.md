# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3281<sub>(+14) | 3447<sub>(+4) | 3471<sub>(-1) |  |
| 8.1.0 | 2024-10-28 | 3267<sub>(+26) | 3443<sub>(+21) | 3472<sub>(-2) |  |
| 8.0.0 | 2024-08-17 | 3241 | 3422 | 3474 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Velvet+<version>&body=###%20Engine%20name%0AVelvet%0A%0A###%20Version%0A8.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-29 06:33:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3241, 3267, 3281]
  line "STC (8.0+0.08s)" [3241, 3267, 3281]
  line "LTC (60.0+0.60s)" [3422, 3443, 3447]
  line "" [3474, 3472, 3471]
  line "VLTC (2m24s+1.12s)" [3474, 3472, 3471]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3471 | 12 | 1688 | 50% | 3472 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 12 | 1760 | 51% | 3444 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3281 | 12 | 1792 | 50% | 3283 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3472 | 32 | 228 | 46% | 3501 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 38 | 172 | 51% | 3433 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3267 | 36 | 208 | 48% | 3283 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 33 | 228 | 49% | 3480 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3422 | 36 | 192 | 51% | 3414 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3241 | 29 | 308 | 50% | 3243 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |