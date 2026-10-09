# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2666<sub>(+116) | 3006<sub>(+135) | 3117<sub>(+104) |  |
| 1.00netbin | 2026-04-13 | 2550<sub>(+2150) | 2871<sub>(+2411) | 3013<sub>(+2542) |  |
| 1.00 | 2026-04-12 | 400 | 460 | 471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gilipol+<version>&body=###%20Engine%20name%0AGilipol%0A%0A###%20Version%0A2.00" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:38:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 400 --> 3200
  line "" [400, 2550, 2666]
  line "STC (8.0+0.08s)" [400, 2550, 2666]
  line "LTC (60.0+0.60s)" [460, 2871, 3006]
  line "" [471, 3013, 3117]
  line "VLTC (2m24s+1.12s)" [471, 3013, 3117]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | 3117 | 24 | 488 | 53% | 3092 | 54% |
| 2.00 | LTC <sub>(60.0+0.60s)</sub> | 3006 | 26 | 432 | 52% | 2985 | 46% |
| 2.00 | STC <sub>(8.0+0.08s)</sub> | 2666 | 27 | 436 | 51% | 2655 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | 3013 | 28 | 426 | 57% | 2795 | 41% |
| 1.00netbin | LTC <sub>(60.0+0.60s)</sub> | 2871 | 25 | 546 | 59% | 2695 | 39% |
| 1.00netbin | STC <sub>(8.0+0.08s)</sub> | 2550 | 28 | 470 | 55% | 2388 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | 471 | 58 | 176 | 24% | 1060 | 21% |
| 1.00 | LTC <sub>(60.0+0.60s)</sub> | 460 | 59 | 148 | 27% | 952 | 30% |
| 1.00 | STC <sub>(8.0+0.08s)</sub> | 400 | 56 | 132 | 34% | 740 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |