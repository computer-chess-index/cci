# Engine: Gilipol

Author: José Carlos Martínez Galán

Home: https://github.com/Lacovipo/Gilipol

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.00 | 2026-06-06 | 2658<sub>(+115) | 2997<sub>(+131) | 3109<sub>(+103) |  |
| 1.00netbin | 2026-04-13 | 2543<sub>(+2149) | 2866<sub>(+2411) | 3006<sub>(+2539) |  |
| 1.00 | 2026-04-12 | 394 | 455 | 467 |  |
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

Generated: 2026-09-11 04:38:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.00", "1.00netbin", "2.00"]
  y-axis "Elo Rating" 300 --> 3200
  line "" [394, 2543, 2658]
  line "STC (8.0+0.08s)" [394, 2543, 2658]
  line "LTC (60.0+0.60s)" [455, 2866, 2997]
  line "" [467, 3006, 3109]
  line "VLTC (2m24s+1.12s)" [467, 3006, 3109]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.00 | VLTC <sub>(2m24s+1.12s)</sub> | 3109 | 24 | 482 | 52% | 3086 | 54% |
| 2.00 | LTC <sub>(60.0+0.60s)</sub> | 2997 | 27 | 416 | 52% | 2977 | 47% |
| 2.00 | STC <sub>(8.0+0.08s)</sub> | 2658 | 28 | 412 | 50% | 2651 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00netbin | VLTC <sub>(2m24s+1.12s)</sub> | 3006 | 28 | 426 | 57% | 2788 | 41% |
| 1.00netbin | LTC <sub>(60.0+0.60s)</sub> | 2866 | 25 | 546 | 59% | 2688 | 39% |
| 1.00netbin | STC <sub>(8.0+0.08s)</sub> | 2543 | 28 | 470 | 55% | 2383 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.00 | VLTC <sub>(2m24s+1.12s)</sub> | 467 | 58 | 176 | 24% | 1056 | 21% |
| 1.00 | LTC <sub>(60.0+0.60s)</sub> | 455 | 59 | 148 | 27% | 948 | 30% |
| 1.00 | STC <sub>(8.0+0.08s)</sub> | 394 | 56 | 132 | 34% | 736 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |