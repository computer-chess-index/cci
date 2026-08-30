# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2844<sub>(+236) | 3079<sub>(+178) | 3123<sub>(+125) |  |
| 9 | 2026-01-10 | 2608<sub>(+16) | 2901<sub>(-15) | 2998<sub>(-34) |  |
| 8 | 2025-09-25 | 2592 | 2916 | 3032 |  |
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

Generated: 2026-08-30 13:10:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2500 --> 3200
  line "" [2592, 2608, 2844]
  line "STC (8.0+0.08s)" [2592, 2608, 2844]
  line "LTC (60.0+0.60s)" [2916, 2901, 3079]
  line "" [3032, 2998, 3123]
  line "VLTC (2m24s+1.12s)" [3032, 2998, 3123]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 24 | 480 | 51% | 3113 | 50% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3079 | 24 | 492 | 51% | 3059 | 51% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2844 | 21 | 732 | 47% | 2865 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 2998 | 36 | 216 | 51% | 2989 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2901 | 40 | 182 | 48% | 2919 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2608 | 49 | 128 | 50% | 2610 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3032 | 38 | 198 | 51% | 3023 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2916 | 37 | 208 | 52% | 2897 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2592 | 43 | 176 | 51% | 2581 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |