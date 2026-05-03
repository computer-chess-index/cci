# Engine: Cwtch

Author: Colin Jenkins

Home: https://github.com/op12no2/cwtch

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5 | 2026-04-06 | 2935<sub>(+41) | 3190<sub>(+57) | 3251<sub>(+73) |  |
| 4 | 2025-12-05 | 2894<sub>(+new) | 3133<sub>(+new) | 3178<sub>(+new) |  |
| 3 | 2025-09-27 |  |  |  |  |
| 2 | 2025-09-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cwtch+<version>&body=###%20Engine%20name%0ACwtch%0A%0A###%20Version%0A5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-03 08:14:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4", "5"]
  y-axis "Elo Rating" 2800 --> 3300
  line "STC (8.0+0.08s)" [2894, 2935]
  line "STC (8.0+0.08s)" [2894, 2935]
  line "LTC (60.0+0.60s)" [3133, 3190]
  line "VLTC (2m24s+1.12s)" [3178, 3251]
  line "VLTC (2m24s+1.12s)" [3178, 3251]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3251 | 28 | 338 | 47% | 3282 | 61% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 31 | 282 | 51% | 3186 | 58% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 2935 | 31 | 320 | 49% | 2942 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | VLTC <sub>(2m24s+1.12s)</sub> | 3178 | 26 | 428 | 50% | 3178 | 50% |
| 4 | LTC <sub>(60.0+0.60s)</sub> | 3133 | 27 | 376 | 53% | 3108 | 55% |
| 4 | STC <sub>(8.0+0.08s)</sub> | 2894 | 25 | 482 | 53% | 2862 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |