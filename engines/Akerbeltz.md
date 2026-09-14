# Engine: Akerbeltz

Author: Julen Aristondo

Home: https://github.com/neluj/Akerbeltz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1937<sub>(+549) | 2198<sub>(+562) | 2307<sub>(+538) |  |
| 1.0.0 | 2025-12-31 | 1388 | 1636 | 1769 |  |
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

Generated: 2026-09-14 04:35:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2400
  line "" [1388, 1937]
  line "STC (8.0+0.08s)" [1388, 1937]
  line "LTC (60.0+0.60s)" [1636, 2198]
  line "" [1769, 2307]
  line "VLTC (2m24s+1.12s)" [1769, 2307]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2307 | 26 | 516 | 51% | 2303 | 21% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2198 | 27 | 496 | 48% | 2213 | 23% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1937 | 25 | 584 | 48% | 1963 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1769 | 41 | 230 | 41% | 1902 | 22% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1636 | 48 | 164 | 43% | 1728 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1388 | 45 | 184 | 40% | 1511 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |