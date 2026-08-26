# Engine: Magpie

Author: George Bland

Home: https://github.com/mrgwbland/Magpie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 581<sub>(+165) | 576<sub>(+143) | 578<sub>(+135) |  |
| 0.2 | 2026-08-07 | 416 | 433 | 443 |  |
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

Generated: 2026-08-26 06:26:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3"]
  y-axis "Elo Rating" 400 --> 600
  line "STC (8.0+0.08s)" [416, 581]
  line "STC (8.0+0.08s)" [416, 581]
  line "LTC (60.0+0.60s)" [433, 576]
  line "VLTC (2m24s+1.12s)" [443, 578]
  line "VLTC (2m24s+1.12s)" [443, 578]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 578 | 46 | 188 | 51% | 579 | 22% |
| 0.3 | LTC <sub>(60.0+0.60s)</sub> | 576 | 46 | 184 | 51% | 568 | 26% |
| 0.3 | STC <sub>(8.0+0.08s)</sub> | 581 | 46 | 196 | 47% | 640 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 443 | 45 | 208 | 35% | 679 | 35% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 433 | 46 | 192 | 36% | 639 | 38% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 416 | 46 | 188 | 37% | 591 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |