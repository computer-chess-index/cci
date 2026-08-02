# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.0 | 2026-07-19 | 3038<sub>(+473) | 3266<sub>(+386) | 3295<sub>(+347) |  |
| 0.2.0 | 2026-06-24 | 2565<sub>(+555) | 2880<sub>(+576) | 2948<sub>(+548) |  |
| 0.1.0 | 2026-06-09 | 2010 | 2304 | 2400 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-02 06:25:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0"]
  y-axis "Elo Rating" 2000 --> 3300
  line "STC (8.0+0.08s)" [2010, 2565, 3038]
  line "STC (8.0+0.08s)" [2010, 2565, 3038]
  line "LTC (60.0+0.60s)" [2304, 2880, 3266]
  line "VLTC (2m24s+1.12s)" [2400, 2948, 3295]
  line "VLTC (2m24s+1.12s)" [2400, 2948, 3295]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3295 | 33 | 236 | 53% | 3274 | 64% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3266 | 32 | 256 | 52% | 3245 | 69% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3038 | 32 | 276 | 50% | 3031 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2948 | 37 | 212 | 50% | 2936 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2880 | 32 | 296 | 47% | 2898 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2565 | 36 | 252 | 46% | 2604 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2400 | 36 | 278 | 49% | 2422 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2304 | 35 | 284 | 49% | 2313 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2010 | 37 | 266 | 48% | 2025 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |