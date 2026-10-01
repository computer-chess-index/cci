# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2511<sub>(+38) | 2807<sub>(+48) | 2892<sub>(+87) |  |
| 3.0 | 2026-01-17 | 2473 | 2759 | 2805 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess3+<version>&body=###%20Engine%20name%0AChess3%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:37:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2400 --> 2900
  line "" [2473, 2511]
  line "STC (8.0+0.08s)" [2473, 2511]
  line "LTC (60.0+0.60s)" [2759, 2807]
  line "" [2805, 2892]
  line "VLTC (2m24s+1.12s)" [2805, 2892]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2892 | 23 | 564 | 51% | 2880 | 40% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 23 | 574 | 50% | 2809 | 38% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2511 | 24 | 600 | 50% | 2518 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2805 | 32 | 316 | 49% | 2819 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2759 | 32 | 320 | 50% | 2757 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2473 | 27 | 440 | 49% | 2479 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |