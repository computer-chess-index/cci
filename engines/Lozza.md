# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2849<sub>(+237) | 3082<sub>(+177) | 3123<sub>(+121) |  |
| 9 | 2026-01-10 | 2612<sub>(+16) | 2905<sub>(-15) | 3002<sub>(-34) |  |
| 8 | 2025-09-25 | 2596 | 2920 | 3036 |  |
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

Generated: 2026-09-14 04:39:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "" [2596, 2612, 2849]
  line "STC (8.0+0.08s)" [2596, 2612, 2849]
  line "LTC (60.0+0.60s)" [2920, 2905, 3082]
  line "" [3036, 3002, 3123]
  line "VLTC (2m24s+1.12s)" [3036, 3002, 3123]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 24 | 506 | 51% | 3117 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3082 | 23 | 516 | 51% | 3065 | 52% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2849 | 20 | 776 | 47% | 2869 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3002 | 36 | 216 | 51% | 2993 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2905 | 40 | 182 | 48% | 2923 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2612 | 49 | 128 | 50% | 2614 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3036 | 38 | 198 | 51% | 3027 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2920 | 37 | 208 | 52% | 2901 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2596 | 43 | 176 | 51% | 2585 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |