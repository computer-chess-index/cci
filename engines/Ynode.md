# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3139<sub>(-9) | 3353<sub>(+23) | 3405<sub>(+26) |  |
| 0219 | 2025-11-16 | 3148 | 3330 | 3379 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ynode+<version>&body=###%20Engine%20name%0AYnode%0A%0A###%20Version%0A0234" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:43:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3100 --> 3500
  line "" [3148, 3139]
  line "STC (8.0+0.08s)" [3148, 3139]
  line "LTC (60.0+0.60s)" [3330, 3353]
  line "" [3379, 3405]
  line "VLTC (2m24s+1.12s)" [3379, 3405]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | 3405 | 25 | 378 | 50% | 3406 | 81% |
| 0234 | LTC <sub>(60.0+0.60s)</sub> | 3353 | 24 | 416 | 51% | 3344 | 74% |
| 0234 | STC <sub>(8.0+0.08s)</sub> | 3139 | 23 | 520 | 50% | 3137 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 27 | 336 | 52% | 3355 | 79% |
| 0219 | LTC <sub>(60.0+0.60s)</sub> | 3330 | 25 | 406 | 49% | 3324 | 72% |
| 0219 | STC <sub>(8.0+0.08s)</sub> | 3148 | 24 | 490 | 53% | 3104 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |