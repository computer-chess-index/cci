# Engine: Velvet

Author: Mhonert

Home: https://github.com/mhonert/velvet-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.1.1 | 2024-11-06 | 3282<sub>(+14) | 3449<sub>(+5) | 3474<sub>(-1) |  |
| 8.1.0 | 2024-10-28 | 3268<sub>(+25) | 3444<sub>(+19) | 3475<sub>(0) |  |
| 8.0.0 | 2024-08-17 | 3243 | 3425 | 3475 |  |
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

Generated: 2026-09-06 06:29:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.1.0", "8.1.1"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3243, 3268, 3282]
  line "STC (8.0+0.08s)" [3243, 3268, 3282]
  line "LTC (60.0+0.60s)" [3425, 3444, 3449]
  line "" [3475, 3475, 3474]
  line "VLTC (2m24s+1.12s)" [3475, 3475, 3474]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 12 | 1700 | 50% | 3474 | 79% |
| 8.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 12 | 1772 | 51% | 3445 | 77% |
| 8.1.1 | STC <sub>(8.0+0.08s)</sub> | 3282 | 12 | 1804 | 50% | 3285 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3475 | 32 | 228 | 46% | 3502 | 82% |
| 8.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3444 | 38 | 172 | 51% | 3436 | 77% |
| 8.1.0 | STC <sub>(8.0+0.08s)</sub> | 3268 | 36 | 208 | 48% | 3285 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3475 | 33 | 228 | 49% | 3482 | 78% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 36 | 192 | 51% | 3417 | 76% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3243 | 29 | 308 | 50% | 3244 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |