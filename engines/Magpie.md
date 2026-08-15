# Engine: Magpie

Author: George Bland

Home: https://github.com/mrgwbland/Magpie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3 | 2026-08-12 | 571<sub>(+159) | 601<sub>(+173) | 510<sub>(+73) |  |
| 0.2 | 2026-08-07 | 412 | 428 | 437 |  |
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

Generated: 2026-08-15 06:26:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3"]
  y-axis "Elo Rating" 400 --> 700
  line "STC (8.0+0.08s)" [412, 571]
  line "STC (8.0+0.08s)" [412, 571]
  line "LTC (60.0+0.60s)" [428, 601]
  line "VLTC (2m24s+1.12s)" [437, 510]
  line "VLTC (2m24s+1.12s)" [437, 510]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 510 | 136 | 16 | 53% | 481 | 31% |
| 0.3 | LTC <sub>(60.0+0.60s)</sub> | 601 | 96 | 36 | 49% | 612 | 25% |
| 0.3 | STC <sub>(8.0+0.08s)</sub> | 571 | 104 | 32 | 53% | 541 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 437 | 45 | 208 | 35% | 671 | 35% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 428 | 46 | 192 | 36% | 630 | 38% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 412 | 46 | 188 | 37% | 583 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |