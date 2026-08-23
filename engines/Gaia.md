# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.3 | 2026-08-21 | 3252<sub>(+7) | 3475<sub>(+32) | 3492<sub>(+22) |  |
| 4.2.2 | 2026-08-13 | 3245<sub>(+52) | 3443<sub>(-2) | 3470<sub>(-29) |  |
| 4.2.1 | 2026-08-09 | 3193<sub>(+new) | 3445<sub>(+new) | 3499<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.2.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-23 06:25:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3193, 3245, 3252]
  line "STC (8.0+0.08s)" [3193, 3245, 3252]
  line "LTC (60.0+0.60s)" [3445, 3443, 3475]
  line "VLTC (2m24s+1.12s)" [3499, 3470, 3492]
  line "VLTC (2m24s+1.12s)" [3499, 3470, 3492]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 48 | 102 | 52% | 3480 | 84% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 48 | 102 | 48% | 3490 | 78% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3252 | 49 | 108 | 49% | 3263 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3470 | 32 | 240 | 50% | 3472 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3443 | 32 | 236 | 50% | 3444 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3245 | 33 | 248 | 51% | 3243 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 56 | 88 | 59% | 3341 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 47 | 128 | 59% | 3272 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3193 | 45 | 152 | 56% | 3071 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |