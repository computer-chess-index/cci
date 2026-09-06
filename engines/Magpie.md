# Engine: Magpie

Author: George Bland

Home: https://github.com/mrgwbland/Magpie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 581<sub>(+164) | 576<sub>(+141) | 574<sub>(+131) |  |
| 0.2 | 2026-08-07 | 417 | 435 | 443 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Magpie+<version>&body=###%20Engine%20name%0AMagpie%0A%0A###%20Version%0A0.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:26:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3"]
  y-axis "Elo Rating" 400 --> 600
  line "" [417, 581]
  line "STC (8.0+0.08s)" [417, 581]
  line "LTC (60.0+0.60s)" [435, 576]
  line "" [443, 574]
  line "VLTC (2m24s+1.12s)" [443, 574]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 574 | 45 | 192 | 49% | 586 | 22% |
| 0.3 | LTC <sub>(60.0+0.60s)</sub> | 576 | 45 | 196 | 50% | 563 | 24% |
| 0.3 | STC <sub>(8.0+0.08s)</sub> | 581 | 45 | 208 | 46% | 644 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 443 | 45 | 208 | 35% | 680 | 35% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 435 | 46 | 192 | 36% | 639 | 38% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 417 | 46 | 188 | 37% | 591 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |