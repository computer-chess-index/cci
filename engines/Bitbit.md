# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2955<sub>(+47) | 3201<sub>(+55) | 3267<sub>(+57) |  |
| 1.6 | 2025-10-18 | 2908 | 3146 | 3210 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bitbit+<version>&body=###%20Engine%20name%0ABitbit%0A%0A###%20Version%0A1.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:36:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2900 --> 3300
  line "" [2908, 2955]
  line "STC (8.0+0.08s)" [2908, 2955]
  line "LTC (60.0+0.60s)" [3146, 3201]
  line "" [3210, 3267]
  line "VLTC (2m24s+1.12s)" [3210, 3267]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3267 | 28 | 344 | 50% | 3272 | 64% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 3201 | 29 | 320 | 50% | 3205 | 60% |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2955 | 29 | 352 | 52% | 2942 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3210 | 24 | 478 | 52% | 3186 | 54% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 24 | 510 | 52% | 3116 | 52% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2908 | 21 | 692 | 50% | 2894 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |