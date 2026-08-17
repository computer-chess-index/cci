# Engine: Magpie

Author: George Bland

Home: https://github.com/mrgwbland/Magpie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 560<sub>(+150) | 582<sub>(+154) | 556<sub>(+120) |  |
| 0.2 | 2026-08-07 | 410 | 428 | 436 |  |
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

Generated: 2026-08-17 06:27:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3"]
  y-axis "Elo Rating" 400 --> 600
  line "STC (8.0+0.08s)" [410, 560]
  line "STC (8.0+0.08s)" [410, 560]
  line "LTC (60.0+0.60s)" [428, 582]
  line "VLTC (2m24s+1.12s)" [436, 556]
  line "VLTC (2m24s+1.12s)" [436, 556]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 556 | 68 | 68 | 55% | 516 | 34% |
| 0.3 | LTC <sub>(60.0+0.60s)</sub> | 582 | 67 | 76 | 51% | 583 | 28% |
| 0.3 | STC <sub>(8.0+0.08s)</sub> | 560 | 68 | 80 | 45% | 664 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 436 | 45 | 208 | 35% | 671 | 35% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 428 | 46 | 192 | 36% | 630 | 38% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 410 | 46 | 188 | 37% | 583 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |