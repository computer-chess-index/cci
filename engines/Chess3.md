# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2503<sub>(+34) | 2804<sub>(+49) | 2888<sub>(+87) |  |
| 3.0 | 2026-01-17 | 2469 | 2755 | 2801 |  |
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

Generated: 2026-09-06 06:23:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2400 --> 2900
  line "" [2469, 2503]
  line "STC (8.0+0.08s)" [2469, 2503]
  line "LTC (60.0+0.60s)" [2755, 2804]
  line "" [2801, 2888]
  line "VLTC (2m24s+1.12s)" [2801, 2888]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2888 | 24 | 544 | 52% | 2874 | 40% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 24 | 566 | 50% | 2805 | 38% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2503 | 24 | 588 | 49% | 2515 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2801 | 32 | 316 | 49% | 2813 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2755 | 32 | 320 | 50% | 2751 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2469 | 27 | 440 | 49% | 2475 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |