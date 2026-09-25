# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2874<sub>(+32) | 3104<sub>(+21) | 3173<sub>(+52) |  |
| 0.21.0 | 2025-10-13 | 2842 | 3083 | 3121 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Princhess+<version>&body=###%20Engine%20name%0APrinchess%0A%0A###%20Version%0A0.22.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-25 04:41:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "" [2842, 2874]
  line "STC (8.0+0.08s)" [2842, 2874]
  line "LTC (60.0+0.60s)" [3083, 3104]
  line "" [3121, 3173]
  line "VLTC (2m24s+1.12s)" [3121, 3173]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3173 | 33 | 248 | 50% | 3168 | 56% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3104 | 30 | 304 | 50% | 3104 | 54% |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 2874 | 32 | 288 | 49% | 2882 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3121 | 24 | 504 | 50% | 3121 | 51% |
| 0.21.0 | LTC <sub>(60.0+0.60s)</sub> | 3083 | 23 | 542 | 50% | 3079 | 50% |
| 0.21.0 | STC <sub>(8.0+0.08s)</sub> | 2842 | 21 | 728 | 51% | 2832 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |