# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2846<sub>(+236) | 3082<sub>(+179) | 3123<sub>(+123) |  |
| 9 | 2026-01-10 | 2610<sub>(+17) | 2903<sub>(-14) | 3000<sub>(-33) |  |
| 8 | 2025-09-25 | 2593 | 2917 | 3033 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A10" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-01 19:02:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "" [2593, 2610, 2846]
  line "STC (8.0+0.08s)" [2593, 2610, 2846]
  line "LTC (60.0+0.60s)" [2917, 2903, 3082]
  line "" [3033, 3000, 3123]
  line "VLTC (2m24s+1.12s)" [3033, 3000, 3123]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 24 | 480 | 51% | 3113 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3082 | 24 | 500 | 52% | 3060 | 52% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2846 | 20 | 744 | 47% | 2866 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3000 | 36 | 216 | 51% | 2989 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2903 | 40 | 182 | 48% | 2920 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2610 | 49 | 128 | 50% | 2612 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3033 | 38 | 198 | 51% | 3024 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2917 | 37 | 208 | 52% | 2898 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2593 | 43 | 176 | 51% | 2583 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |