# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2951<sub>(+46) | 3198<sub>(+55) | 3268<sub>(+60) |  |
| 1.6 | 2025-10-18 | 2905 | 3143 | 3208 |  |
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

Generated: 2026-09-06 06:22:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2900 --> 3300
  line "" [2905, 2951]
  line "STC (8.0+0.08s)" [2905, 2951]
  line "LTC (60.0+0.60s)" [3143, 3198]
  line "" [3208, 3268]
  line "VLTC (2m24s+1.12s)" [3208, 3268]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3268 | 28 | 334 | 50% | 3270 | 65% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 3198 | 29 | 312 | 50% | 3202 | 60% |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2951 | 29 | 344 | 51% | 2939 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3208 | 24 | 478 | 52% | 3183 | 54% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 24 | 510 | 52% | 3114 | 52% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2905 | 21 | 692 | 50% | 2892 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |