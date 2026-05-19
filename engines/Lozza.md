# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6 | 2026-02-13 |  |  |  |  |
| 2 | 2026-02-13 |  |  |  |  |
| 10 | 2026-01-17 | 2870<sub>(+252) | 3083<sub>(+176) | 3121<sub>(+117) |  |
| 9 | 2026-01-10 | 2618<sub>(+18) | 2907<sub>(-13) | 3004<sub>(-32) |  |
| 8 | 2025-09-25 | 2600<sub>(+new) | 2920<sub>(+new) | 3036<sub>(+new) |  |
| 7 | 2025-07-12 |  |  |  |  |
| 5.1 | 2025-06-02 |  |  |  |  |
| 5 | 2025-02-25 |  |  |  |  |
| 4 | 2025-01-06 |  |  |  |  |
| 3 | 2024-10-06 |  |  |  |  |
| 2.5 | 2023-02-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:26:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2600, 2618, 2870]
  line "STC (8.0+0.08s)" [2600, 2618, 2870]
  line "LTC (60.0+0.60s)" [2920, 2907, 3083]
  line "VLTC (2m24s+1.12s)" [3036, 3004, 3121]
  line "VLTC (2m24s+1.12s)" [3036, 3004, 3121]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | 3121 | 27 | 402 | 51% | 3113 | 51% |
| 10 | LTC <sub>(60.0+0.60s)</sub> | 3083 | 27 | 388 | 52% | 3058 | 49% |
| 10 | STC <sub>(8.0+0.08s)</sub> | 2870 | 24 | 536 | 48% | 2886 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3004 | 36 | 216 | 51% | 2993 | 52% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 2907 | 40 | 182 | 48% | 2924 | 46% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 2618 | 49 | 128 | 50% | 2619 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | 3036 | 38 | 198 | 51% | 3027 | 50% |
| 8 | LTC <sub>(60.0+0.60s)</sub> | 2920 | 37 | 208 | 52% | 2901 | 52% |
| 8 | STC <sub>(8.0+0.08s)</sub> | 2600 | 43 | 176 | 51% | 2591 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |