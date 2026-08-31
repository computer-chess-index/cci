# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2947<sub>(+43) | 3200<sub>(+57) | 3267<sub>(+61) |  |
| 1.6 | 2025-10-18 | 2904 | 3143 | 3206 |  |
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

Generated: 2026-08-31 04:33:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2900 --> 3300
  line "" [2904, 2947]
  line "STC (8.0+0.08s)" [2904, 2947]
  line "LTC (60.0+0.60s)" [3143, 3200]
  line "" [3206, 3267]
  line "VLTC (2m24s+1.12s)" [3206, 3267]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3267 | 28 | 330 | 50% | 3268 | 65% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 3200 | 30 | 300 | 50% | 3201 | 60% |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2947 | 30 | 320 | 51% | 2936 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3206 | 24 | 478 | 52% | 3182 | 54% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 24 | 510 | 52% | 3113 | 52% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2904 | 21 | 692 | 50% | 2890 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |