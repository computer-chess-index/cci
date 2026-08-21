# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2857<sub>(+new) | 3132<sub>(+new) | 3229<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2268<sub>(+97) | 2607<sub>(+145) | 2750<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2171<sub>(+150) | 2462<sub>(+133) | 2600<sub>(+163) |  |
| 1.5.0 | 2026-03-04 | 2021<sub>(+254) | 2329<sub>(+247) | 2437<sub>(+236) |  |
| 1.4.0 | 2026-02-07 | 1767<sub>(+132) | 2082<sub>(+103) | 2201<sub>(+127) |  |
| 1.3.1 | 2026-02-01 | 1635<sub>(-24) | 1979<sub>(+19) | 2074<sub>(+52) |  |
| 1.2.2 | 2026-01-23 | 1659 | 1960 | 2022 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:31:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1659, 1635, 1767, 2021, 2171, 2268, 2857]
  line "STC (8.0+0.08s)" [1659, 1635, 1767, 2021, 2171, 2268, 2857]
  line "LTC (60.0+0.60s)" [1960, 1979, 2082, 2329, 2462, 2607, 3132]
  line "VLTC (2m24s+1.12s)" [2022, 2074, 2201, 2437, 2600, 2750, 3229]
  line "VLTC (2m24s+1.12s)" [2022, 2074, 2201, 2437, 2600, 2750, 3229]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3229 | 27 | 368 | 50% | 3228 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3132 | 29 | 334 | 53% | 3100 | 53% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2857 | 26 | 434 | 51% | 2846 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2750 | 27 | 436 | 52% | 2732 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2607 | 31 | 328 | 49% | 2612 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2268 | 31 | 348 | 52% | 2250 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2600 | 34 | 280 | 50% | 2595 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2462 | 32 | 332 | 51% | 2452 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2171 | 35 | 288 | 49% | 2188 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2437 | 30 | 380 | 48% | 2456 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2329 | 37 | 252 | 52% | 2313 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2021 | 35 | 288 | 54% | 1980 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2201 | 36 | 264 | 49% | 2210 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2082 | 40 | 206 | 53% | 2060 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1767 | 43 | 180 | 51% | 1758 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2074 | 40 | 204 | 52% | 2059 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1979 | 46 | 164 | 51% | 1974 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1635 | 42 | 208 | 47% | 1661 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2022 | 38 | 260 | 46% | 2093 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1960 | 43 | 204 | 46% | 2024 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1659 | 41 | 232 | 47% | 1715 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |