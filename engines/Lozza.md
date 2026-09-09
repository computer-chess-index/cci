# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2849<sub>(+238) | 3081<sub>(+177) | 3123<sub>(+122) |  |
| 9 | 2026-01-10 | 2611<sub>(+16) | 2904<sub>(-15) | 3001<sub>(-34) |  |
| 8 | 2025-09-25 | 2595 | 2919 | 3035 |  |
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

Generated: 2026-09-09 04:40:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "" [2595, 2611, 2849]
  line "STC (8.0+0.08s)" [2595, 2611, 2849]
  line "LTC (60.0+0.60s)" [2919, 2904, 3081]
  line "" [3035, 3001, 3123]
  line "VLTC (2m24s+1.12s)" [3035, 3001, 3123]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 24 | 496 | 51% | 3116 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3081 | 23 | 516 | 51% | 3063 | 52% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2849 | 20 | 756 | 47% | 2867 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3001 | 36 | 216 | 51% | 2990 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2904 | 40 | 182 | 48% | 2921 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2611 | 49 | 128 | 50% | 2612 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3035 | 38 | 198 | 51% | 3025 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2919 | 37 | 208 | 52% | 2900 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2595 | 43 | 176 | 51% | 2584 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |