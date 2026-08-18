# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3340<sub>(+4) | 3505<sub>(-1) | 3533<sub>(+1) |  |
| 1.3.0 | 2026-06-17 | 3336<sub>(+new) | 3506<sub>(+new) | 3532<sub>(+new) |  |
| 1.2.0 | 2025-05-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Renegade+<version>&body=###%20Engine%20name%0ARenegade%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:28:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3336, 3340]
  line "STC (8.0+0.08s)" [3336, 3340]
  line "LTC (60.0+0.60s)" [3506, 3505]
  line "VLTC (2m24s+1.12s)" [3532, 3533]
  line "VLTC (2m24s+1.12s)" [3532, 3533]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 36 | 174 | 50% | 3534 | 89% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3505 | 34 | 200 | 49% | 3514 | 87% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 3340 | 28 | 328 | 52% | 3328 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3532 | 33 | 226 | 54% | 3494 | 81% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3506 | 31 | 260 | 53% | 3455 | 77% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 3336 | 35 | 218 | 53% | 3279 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |