# Engine: Akerbeltz

Author: Julen Aristondo

Home: https://github.com/neluj/Akerbeltz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1936<sub>(+548) | 2199<sub>(+564) | 2304<sub>(+535) |  |
| 1.0.0 | 2025-12-31 | 1388 | 1635 | 1769 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Akerbeltz+<version>&body=###%20Engine%20name%0AAkerbeltz%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:21:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2400
  line "" [1388, 1936]
  line "STC (8.0+0.08s)" [1388, 1936]
  line "LTC (60.0+0.60s)" [1635, 2199]
  line "" [1769, 2304]
  line "VLTC (2m24s+1.12s)" [1769, 2304]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2304 | 27 | 508 | 51% | 2302 | 21% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2199 | 27 | 492 | 48% | 2211 | 23% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1936 | 25 | 584 | 48% | 1962 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1769 | 41 | 230 | 41% | 1901 | 22% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1635 | 48 | 164 | 43% | 1727 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1388 | 45 | 184 | 40% | 1511 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |